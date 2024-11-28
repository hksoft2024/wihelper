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
			disableElevation: true,
		},
		styleOverrides: {
			root: ({ ownerState, theme }) => ({
				textTransform: "unset",
				fontWeight: 400,
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
