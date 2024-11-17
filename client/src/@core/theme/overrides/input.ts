import { alpha, Theme } from "@mui/material/styles";

const input: Theme["components"] = {
	MuiOutlinedInput: {
		defaultProps: {
			size: "small",
		},
		styleOverrides: {
			root: ({ theme }) => ({
				"& .MuiOutlinedInput-notchedOutline": {
					borderColor: "#dae1e7",
					transition: theme.transitions.create(["border-color", "box-shadow"]),
				},
				":hover .MuiOutlinedInput-notchedOutline": {
					borderColor: alpha("#000", 0.23),
				},
				"&.Mui-focused .MuiOutlinedInput-notchedOutline": {
					borderColor: alpha(theme.palette.primary.main, 0.35),
					borderWidth: 1,
					boxShadow: `inset 0 1px 2px rgba(0,0,0,0),0 .375rem .625rem -0.3125rem ${alpha(
						theme.palette.primary.main,
						0.15
					)}`,
				},
				color: theme.palette.text.secondary,
				"& .MuiInputBase-input": {
					paddingTop: 10,
					paddingBottom: 10,
					lineHeight: 1.5,
					"::placeholder": {
						color: "#7d879c",
						opacity: 1,
					},
				},
			}),
		},
	},
	MuiFormLabel: {
		styleOverrides: {
			root: {
				"&.Mui-focused": {
					color: "inherit",
				},
			},
		},
	},
};

export default input;
