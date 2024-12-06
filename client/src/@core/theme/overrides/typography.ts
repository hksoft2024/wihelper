import { Theme } from "@mui/material/styles";

const typography: Theme["components"] = {
	MuiTypography: {
		styleOverrides: {
			root: ({ theme }) => ({
				transition: theme.transitions.create(["color"]),
			}),
			h1: ({ theme }) => ({
				lineHeight: 1.2,
				fontSize: theme.breakpoints.down("lg")
					? "calc(1.475rem + 2.7vw)"
					: "3.5rem",
				fontWeight: 700,
			}),
			h2: ({ theme }) => ({
				lineHeight: 1.2,
				fontSize: theme.breakpoints.down("lg")
					? "calc(1.325rem + 0.9vw)"
					: "2rem",
				fontWeight: 600,
			}),
			h3: ({ theme }) => ({
				lineHeight: 1.2,
				fontSize: theme.breakpoints.down("lg")
					? "calc(1.3rem + 0.6vw)"
					: "1.75rem",
				fontWeight: 500,
			}),
			h4: ({ theme }) => ({
				lineHeight: 1.2,
				fontSize: theme.breakpoints.down("lg")
					? "calc(1.275rem + 0.3vw)"
					: "1.5rem",
				fontWeight: 500,
			}),
			h5: {
				lineHeight: 1.2,
				fontSize: "1rem",
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
