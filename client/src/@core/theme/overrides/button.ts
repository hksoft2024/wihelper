import { Theme } from "@mui/material/styles";
import themeConfig from "~/configs/themeConfig";

const button: Theme["components"] = {
	MuiButtonBase: {
		defaultProps: {
			disableRipple: themeConfig.disableRipple,
		},
	},
	MuiButton: {
		defaultProps: {
			variant: "contained",
		},
		styleOverrides: {
			root: ({ ownerState, theme }) => ({
				textTransform: "unset",
				fontWeight: 400,
				"&, &:hover, &:active": {
					boxShadow: "none",
				},
				...(ownerState.variant === "outlined"
					? {
							":hover": {
								backgroundColor: theme.palette.secondary.main,
								color: theme.palette.secondary.contrastText,
							},
					  }
					: {}),
			}),
		},
	},
	MuiIconButton: {
		styleOverrides: {
			root: {
				":hover": {
					backgroundColor: "transparent",
				},
			},
		},
	},
};

export default button;
