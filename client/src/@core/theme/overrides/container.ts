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
				[theme.breakpoints.up("xs")]: {
					paddingLeft: theme.spacing(4),
					paddingRight: theme.spacing(4),
				},
			}),
		},
	},
};
export default container;
