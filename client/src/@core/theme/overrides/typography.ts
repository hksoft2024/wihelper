import { Theme } from "@mui/material/styles";

const typography: Theme["components"] = {
	MuiTypography: {
		styleOverrides: {
			root: ({ theme }) => ({
				transition: theme.transitions.create(["color"]),
			}),
		},
	},
};

export default typography;
