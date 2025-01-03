import CloseIcon from "@mui/icons-material/Close";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import Avatar from "@mui/material/Avatar";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import ListItemIcon, { listItemIconClasses } from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import MuiTab from "@mui/material/Tab";
import MuiTabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import { Fragment, MouseEvent, useMemo, useState } from "react";
import { toast } from "react-toastify";
import { Option } from "~/@core/types";
import { logout } from "~/actions/authActions";
import Dialog from "~/components/ui/Dialog";
import { enumToArray } from "~/utils/converts";
import { extractFirstTwoInitials } from "~/utils/string";
import SigninForm from "./SigninForm";
import SignupForm from "./SignupForm";

enum Tab {
	SIGN_IN,
	SIGN_UP,
}

export type AuthFormProps = {
	onStart: () => void;
	onFinish: () => void;
	onSuccess: () => void;
};

const AuthActions = () => {
	const t = useTranslations();
	const { data: session, status } = useSession();

	const [openModal, setOpenModal] = useState(false);
	const [activeTab, setActiveTab] = useState<Tab>(Tab.SIGN_IN);
	const [isLoading, setIsLoading] = useState(false);
	const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

	const tabs = useMemo<Option<number>[]>(
		() =>
			enumToArray(Tab).map((tab) => ({
				label: t(tab.label),
				value: tab.value as number,
			})),
		[t]
	);

	const handleOpenModal = () => {
		setOpenModal(true);
	};

	const handleCloseModal = () => {
		if (isLoading) return;

		setOpenModal(false);
	};

	const handleFormStart = () => {
		setIsLoading(true);
	};

	const handleFormFinish = () => {
		setIsLoading(false);
	};

	const handleRegisterSuccess = () => {
		setActiveTab(Tab.SIGN_IN);
		toast.success(t("MESSAGE.REGISTER_SUCCESS"));
	};

	const handleLoginSuccess = () => {
		setOpenModal(false);
		window.location.reload();
	};

	const handleOpenUserDropdown = (event: MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleCloseUserDropdown = () => {
		setAnchorEl(null);
	};

	const handleSignOut = async () => {
		await logout();

		window.location.href = "/";
	};

	if (status === "loading") {
		return (
			<Stack
				direction="row"
				alignItems="center"
				gap={2.5}
				sx={{ cursor: "pointer" }}
			>
				<Skeleton variant="circular" width={40} height={40} />

				<Stack display={{ xs: "none", lg: "flex" }}>
					<Skeleton variant="text" width={80} sx={{ fontSize: "0.75rem" }} />
					<Skeleton variant="text" width={80} sx={{ fontSize: "0.875rem" }} />
				</Stack>
			</Stack>
		);
	}

	if (!!session) {
		return (
			<Fragment>
				<Stack
					direction="row"
					alignItems="center"
					gap={2.5}
					sx={{ cursor: "pointer" }}
					onClick={handleOpenUserDropdown}
				>
					<Avatar>{extractFirstTwoInitials(session.user.full_name)}</Avatar>

					<Stack display={{ xs: "none", lg: "flex" }}>
						<Typography variant="caption" color="textMuted" maxWidth={100}>
							{session.user.full_name}
						</Typography>
						<Typography variant="body2" color="textPrimary" title="tres">
							{t("MY_ACCOUNT")}
						</Typography>
					</Stack>
				</Stack>

				<Menu
					anchorEl={anchorEl}
					open={!!anchorEl}
					onClose={handleCloseUserDropdown}
					disableAutoFocusItem
				>
					<MenuItem
						sx={{
							[`.${listItemIconClasses.root}`]: {
								minWidth: 28,
							},
						}}
						onClick={handleSignOut}
					>
						<ListItemIcon>
							<LogoutOutlinedIcon fontSize="small" />
						</ListItemIcon>
						<ListItemText primary={t("SIGN_OUT")} />
					</MenuItem>
				</Menu>
			</Fragment>
		);
	}

	return (
		<Fragment>
			<Stack
				direction="row"
				alignItems="center"
				gap={2.5}
				sx={{ cursor: "pointer" }}
				onClick={handleOpenModal}
			>
				<PersonOutlinedIcon color="action" sx={{ fontSize: 28 }} />

				<Stack display={{ xs: "none", lg: "flex" }}>
					<Typography variant="caption" color="textMuted">
						{t("HELLO_SIGN_IN")}
					</Typography>
					<Typography variant="body2" color="textPrimary">
						{t("MY_ACCOUNT")}
					</Typography>
				</Stack>
			</Stack>

			<Dialog
				open={openModal}
				onClose={handleCloseModal}
				isLoading={isLoading}
				hiddenFooter
				renderHeader={
					<DialogTitle
						sx={{ bgcolor: "#f6f9fc", py: 0, pt: 3, px: 5, borderRadius: 2 }}
					>
						<Stack
							direction="row"
							alignItems="center"
							justifyContent="space-between"
						>
							<MuiTabs
								value={activeTab}
								onChange={(_e, value) => setActiveTab(value)}
								sx={{ ".MuiTabs-flexContainer": { flexWrap: "wrap" } }}
							>
								{tabs.map((tab) => (
									<MuiTab
										key={tab.value}
										disabled={isLoading}
										value={tab.value}
										label={
											<Typography
												display="flex"
												alignItems="center"
												gap={2}
												textTransform="none"
												fontSize={16}
												color="inherit"
												sx={{ ":hover": { color: "primary.main" } }}
											>
												{tab.value === Tab.SIGN_IN ? (
													<LockOutlinedIcon fontSize="small" />
												) : (
													<PersonOutlinedIcon fontSize="small" />
												)}
												{tab.label}
											</Typography>
										}
									/>
								))}
							</MuiTabs>

							<IconButton
								sx={{
									opacity: 0.5,
									transition: (theme) => theme.transitions.create(["opacity"]),
									":hover": { opacity: 1 },
								}}
								onClick={handleCloseModal}
							>
								<CloseIcon />
							</IconButton>
						</Stack>
					</DialogTitle>
				}
			>
				{activeTab === Tab.SIGN_IN ? (
					<SigninForm
						onStart={handleFormStart}
						onFinish={handleFormFinish}
						onSuccess={handleLoginSuccess}
					/>
				) : (
					<SignupForm
						onStart={handleFormStart}
						onFinish={handleFormFinish}
						onSuccess={handleRegisterSuccess}
					/>
				)}
			</Dialog>
		</Fragment>
	);
};

export default AuthActions;
