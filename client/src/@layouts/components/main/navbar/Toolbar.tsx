import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import Fade from "@mui/material/Fade";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import { useTranslations } from "next-intl";
import AuthActions from "./AuthActions";
import Cart from "./cart";

type Props = {
	onToggleNavigation: () => void;
	hideToggleMenuButton?: boolean;
};

const Toolbar = ({ onToggleNavigation, hideToggleMenuButton }: Props) => {
	const t = useTranslations();

	return (
		<Stack direction="row" alignItems="center">
			{!hideToggleMenuButton && (
				<IconButton
					size="large"
					sx={{ mr: { xs: 3, lg: 0 } }}
					onClick={onToggleNavigation}
				>
					<MenuIcon sx={{ fontSize: 28 }} />
				</IconButton>
			)}

			<Tooltip
				title={t("HELP_AND_SUPPORT")}
				placement="top"
				TransitionComponent={Fade}
			>
				<IconButton
					size="large"
					sx={{ mr: 2, display: { xs: "none", lg: "flex" } }}
				>
					<HeadsetMicOutlinedIcon fontSize="small" />
				</IconButton>
			</Tooltip>

			<AuthActions />

			<Cart />
		</Stack>
	);
};

export default Toolbar;
