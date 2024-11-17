import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import Fade from "@mui/material/Fade";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import { alpha } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import { useTranslations } from "next-intl";
import AuthActions from "./AuthActions";
import Cart from "./cart";
import MenuIcon from "@mui/icons-material/Menu";

type Props = {
	onToggleNavigationMobile: () => void;
};

const Toolbar = ({ onToggleNavigationMobile }: Props) => {
	const t = useTranslations();

	return (
		<Stack direction="row" alignItems="center">
			<IconButton
				size="large"
				sx={{ mr: 2, display: { xs: "flex", lg: "none" } }}
				onClick={onToggleNavigationMobile}
			>
				<MenuIcon sx={{ fontSize: 28 }} />
			</IconButton>

			<Tooltip
				title={t("HELP_AND_SUPPORT")}
				placement="top"
				TransitionComponent={Fade}
				slotProps={{
					popper: {
						sx: {
							"& .MuiTooltip-tooltip": {
								bgcolor: alpha("#2b3445", 0.9),
								color: alpha("#fff", 0.9),
							},
							"&[data-popper-placement*='top'] .MuiTooltip-tooltip.MuiTooltip-tooltipPlacementTop":
								{
									mb: 0,
								},
						},
					},
				}}
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
