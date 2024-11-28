import { Theme } from "@mui/material/styles";

const tooltip: Theme["components"] = {
	MuiTooltip: {
		styleOverrides: {
			popper: ({ theme }) => ({
				"&.MuiTooltip-popper[data-popper-placement*='top'] .MuiTooltip-tooltip":
					{
						marginBottom: 0,
						"&.MuiTooltip-tooltipArrow": {
							marginBottom: theme.spacing(2),
						},
					},
				"&.MuiTooltip-popper[data-popper-placement*='bottom'] .MuiTooltip-tooltip":
					{
						marginTop: 0,
						"&.MuiTooltip-tooltipArrow": {
							marginTop: theme.spacing(2),
						},
					},
				"&.MuiTooltip-popper[data-popper-placement*='left'] .MuiTooltip-tooltip":
					{
						marginRight: 0,
						"&.MuiTooltip-tooltipArrow": {
							marginRight: theme.spacing(2),
						},
					},
				"&.MuiTooltip-popper[data-popper-placement*='right'] .MuiTooltip-tooltip":
					{
						marginLeft: 0,
						"&.MuiTooltip-tooltipArrow": {
							marginLeft: theme.spacing(2),
						},
					},
			}),
			tooltip: {
				backgroundColor: "#2b3445",
				color: "#fff",
				fontWeight: 400,
			},
			arrow: {
				color: "#2b3445",
			},
		},
	},
};

export default tooltip;
