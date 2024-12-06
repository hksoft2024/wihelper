import { Theme } from "@mui/material/styles";

const card: Theme["components"] = {
	MuiCard: {
		styleOverrides: {
			root: ({ theme }) => ({
				borderRadius: theme.spacing(2),
			}),
		},
	},
	MuiCardContent: {
		styleOverrides: {
			root: ({ theme }) => ({
				":last-child": {
					paddingBottom: theme.spacing(4),
				},
			}),
		},
	},
};

export default card;
