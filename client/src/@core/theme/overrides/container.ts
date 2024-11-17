import { Theme } from "@mui/material/styles";

const container: Theme["components"] = {
	MuiContainer: {
		defaultProps: {
			maxWidth: "xl",
		},
		styleOverrides: {
			maxWidthXl: ({ theme }) => ({
				[theme.breakpoints.up("xl")]: {
					maxWidth: 1260,
				},
				[theme.breakpoints.down("xl")]: {
					maxWidth: "100%",
				},
				[theme.breakpoints.down("sm")]: {
					paddingLeft: theme.spacing(3),
					paddingRight: theme.spacing(3),
				},
			}),
		},
	},
};
export default container;
