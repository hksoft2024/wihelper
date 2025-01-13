import { Theme } from "@mui/material/styles";
import { BaseColor } from "~/@core/types";
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
			disableElevation: true,
		},
		styleOverrides: {
			root: ({ ownerState, theme }) => ({
				textTransform: "unset",
				fontWeight: 400,
				...(ownerState.variant === "outlined"
					? {
							":hover": {
								backgroundColor:
									theme.palette[ownerState.color as BaseColor].main,
								color:
									theme.palette[ownerState.color as BaseColor].contrastText,
							},
					  }
					: {}),
				...(ownerState.variant === "text"
					? {
							":hover": {
								backgroundColor: "transparent",
							},
					  }
					: {}),
			}),
			sizeLarge: ({ theme }) => ({
				padding: theme.spacing(2.3125, 5.25),
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
