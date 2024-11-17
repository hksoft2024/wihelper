import CloseIcon from "@mui/icons-material/Close";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import LoadingButton from "@mui/lab/LoadingButton";
import Checkbox from "@mui/material/Checkbox";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Fade from "@mui/material/Fade";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import Stack from "@mui/material/Stack";
import { alpha } from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";
import { Fragment, useState } from "react";
import { Link } from "~/i18n/routing";

const AuthActions = () => {
	const t = useTranslations();

	const [openModal, setOpenModal] = useState(false);
	const [activeTab, setActiveTab] = useState(1);
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	const handleOpenModal = () => {
		setOpenModal(true);
	};

	const handleCloseModal = () => {
		setOpenModal(false);
	};

	const handleToggleShowPassword = () => {
		setShowPassword((prev) => !prev);
	};

	const handleToggleShowConfirmPassword = () => {
		setShowConfirmPassword((prev) => !prev);
	};

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
					<Typography variant="caption" sx={{ color: "#7d879c" }}>
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
				maxWidth="sm"
				fullWidth
				PaperProps={{
					sx: { borderRadius: 2 },
				}}
			>
				<DialogTitle sx={{ bgcolor: "#f6f9fc", py: 0, pt: 3, px: 5 }}>
					<Stack
						direction="row"
						alignItems="center"
						justifyContent="space-between"
					>
						<Tabs
							value={activeTab}
							onChange={(_e, value) => setActiveTab(value)}
							sx={{
								"& .MuiTabs-flexContainer": {
									flexWrap: "wrap",
								},
							}}
						>
							<Tab
								value={1}
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
										<LockOutlinedIcon fontSize="small" />
										Sign in
									</Typography>
								}
							/>
							<Tab
								value={2}
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
										<PersonOutlinedIcon fontSize="small" />
										Sign up
									</Typography>
								}
							/>
						</Tabs>

						<IconButton
							sx={{
								opacity: 0.5,
								transition: (theme) => theme.transitions.create(["opacity"]),
								":hover": { opacity: 1 },
							}}
						>
							<CloseIcon />
						</IconButton>
					</Stack>
				</DialogTitle>
				<DialogContent dividers sx={{ py: 6, px: 5 }}>
					{activeTab === 1 && (
						<Fade in={activeTab === 1} mountOnEnter unmountOnExit>
							<Stack spacing={4}>
								<FormControl>
									<FormLabel sx={{ mb: 1.5, fontSize: 14, fontWeight: 500 }}>
										Email or mobile number
									</FormLabel>
									<OutlinedInput placeholder="johndoe@example.com or 1(415)600-8000" />
								</FormControl>
								<FormControl>
									<FormLabel sx={{ mb: 1.5, fontSize: 14, fontWeight: 500 }}>
										Password
									</FormLabel>
									<OutlinedInput
										type={showPassword ? "text" : "password"}
										endAdornment={
											<InputAdornment position="end">
												<IconButton
													size="small"
													onClick={handleToggleShowPassword}
												>
													{showPassword ? (
														<VisibilityOffOutlinedIcon />
													) : (
														<VisibilityOutlinedIcon />
													)}
												</IconButton>
											</InputAdornment>
										}
									/>
								</FormControl>
								<Stack
									direction="row"
									alignItems="center"
									justifyContent="space-between"
									flexWrap="wrap"
								>
									<FormControlLabel
										control={<Checkbox size="small" />}
										label="Remember me"
										slotProps={{
											typography: { variant: "body2", color: "textSecondary" },
										}}
									/>

									<Typography
										component={Link}
										href="#"
										variant="body2"
										color="error"
									>
										Forgot password?
									</Typography>
								</Stack>
								<LoadingButton
									fullWidth
									variant="contained"
									size="large"
									sx={{
										"&": {
											boxShadow: (theme) =>
												`0 .5rem 1.125rem -.5rem ${alpha(
													theme.palette.primary.main,
													0.9
												)}`,
										},
									}}
								>
									Sign in
								</LoadingButton>
							</Stack>
						</Fade>
					)}
					{activeTab === 2 && (
						<Fade in={activeTab === 2} mountOnEnter unmountOnExit>
							<Stack spacing={4}>
								<FormControl>
									<FormLabel sx={{ mb: 1.5, fontSize: 14, fontWeight: 500 }}>
										First name
									</FormLabel>
									<OutlinedInput placeholder="John" />
								</FormControl>
								<FormControl>
									<FormLabel sx={{ mb: 1.5, fontSize: 14, fontWeight: 500 }}>
										Last name
									</FormLabel>
									<OutlinedInput placeholder="Doe" />
								</FormControl>
								<FormControl>
									<FormLabel sx={{ mb: 1.5, fontSize: 14, fontWeight: 500 }}>
										Email or mobile number
									</FormLabel>
									<OutlinedInput placeholder="johndoe@example.com or 1(415)600-8000" />
								</FormControl>
								<FormControl>
									<FormLabel sx={{ mb: 1.5, fontSize: 14, fontWeight: 500 }}>
										Password
									</FormLabel>
									<OutlinedInput
										type={showPassword ? "text" : "password"}
										endAdornment={
											<InputAdornment position="end">
												<IconButton
													size="small"
													onClick={handleToggleShowPassword}
												>
													{showPassword ? (
														<VisibilityOffOutlinedIcon />
													) : (
														<VisibilityOutlinedIcon />
													)}
												</IconButton>
											</InputAdornment>
										}
									/>
								</FormControl>
								<FormControl>
									<FormLabel sx={{ mb: 1.5, fontSize: 14, fontWeight: 500 }}>
										Confirm password
									</FormLabel>
									<OutlinedInput
										type={showConfirmPassword ? "text" : "password"}
										endAdornment={
											<InputAdornment position="end">
												<IconButton
													size="small"
													onClick={handleToggleShowConfirmPassword}
												>
													{showConfirmPassword ? (
														<VisibilityOffOutlinedIcon />
													) : (
														<VisibilityOutlinedIcon />
													)}
												</IconButton>
											</InputAdornment>
										}
									/>
								</FormControl>
								<LoadingButton
									fullWidth
									variant="contained"
									size="large"
									sx={{
										"&": {
											boxShadow: (theme) =>
												`0 .5rem 1.125rem -.5rem ${alpha(
													theme.palette.primary.main,
													0.9
												)}`,
										},
									}}
								>
									Sign up
								</LoadingButton>
							</Stack>
						</Fade>
					)}
				</DialogContent>
			</Dialog>
		</Fragment>
	);
};

export default AuthActions;
