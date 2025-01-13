import { Theme } from "@mui/material/styles";

const typography: Theme["components"] = {
	MuiTypography: {
		styleOverrides: {
			root: ({ theme }) => ({
				transition: theme.transitions.create(["color"]),
			}),
			h1: ({ theme }) => ({
				lineHeight: 1.2,
				fontSize: "3.5rem",
				[theme.breakpoints.down("lg")]: {
					fontSize: "calc(1.475rem + 2.7vw)",
				},
				fontWeight: 700,
			}),
			h2: ({ theme }) => ({
				lineHeight: 1.2,
				fontSize: "2rem",
				[theme.breakpoints.down("lg")]: {
					fontSize: "calc(1.325rem + 0.9vw)",
				},
				fontWeight: 600,
			}),
			h3: ({ theme }) => ({
				lineHeight: 1.2,
				fontSize: "1.75rem",
				[theme.breakpoints.down("lg")]: {
					fontSize: "calc(1.3rem + 0.6vw)",
				},
				fontWeight: 500,
			}),
			h4: ({ theme }) => ({
				lineHeight: 1.2,
				fontSize: "1.5rem",
				[theme.breakpoints.down("lg")]: {
					fontSize: "calc(1.275rem + 0.3vw)",
				},
				fontWeight: 500,
			}),
			h5: {
				lineHeight: 1.2,
				fontSize: "1.25rem",
				fontWeight: 500,
			},
			h6: {
				lineHeight: 1.2,
				fontSize: "1rem",
				fontWeight: 500,
			},
		},
	},
};

export default typography;
