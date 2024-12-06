import { alpha, Theme } from "@mui/material/styles";

const errorIconUrl =
	"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' fill='none' stroke='%23f34770' stroke-width='1' stroke-linecap='round' stroke-linejoin='round'%3e%3ccircle cx='6' cy='6' r='5'%3e%3c/circle%3e%3cline x1='8' y1='4' x2='4' y2='8'%3e%3c/line%3e%3cline x1='4' y1='4' x2='8' y2='8'%3e%3c/line%3e%3c/svg%3e";

const input: Theme["components"] = {
	MuiTextField: {
		defaultProps: {
			size: "small",
			fullWidth: true,
		},
	},
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
					borderColor: "#dae1e7",
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
						color: theme.palette.text.muted,
						opacity: 1,
					},
				},
			}),
			error: ({ theme }) => ({
				":hover .MuiOutlinedInput-notchedOutline": {
					borderColor: theme.palette.error.main,
				},
				"&.Mui-focused .MuiOutlinedInput-notchedOutline": {
					borderColor: theme.palette.error.main,
					boxShadow: "none",
				},
				"&.Mui-error": {
					paddingRight: theme.spacing(10.5),
					backgroundImage: `url("${errorIconUrl}")`,
					backgroundRepeat: "no-repeat",
					backgroundPosition: "right calc(0.375em + 0.3125rem) center",
					backgroundSize: "calc(0.75em + 0.625rem) calc(0.75em + 0.625rem)",
				},
			}),
		},
	},
	MuiFormLabel: {
		styleOverrides: {
			root: {
				"&.Mui-focused, &.Mui-error": {
					color: "inherit",
				},
			},
		},
	},
	MuiFormHelperText: {
		styleOverrides: {
			root: ({ theme }) => ({
				marginTop: theme.spacing(1.5),
				marginLeft: 0,
				marginRight: 0,
			}),
		},
	},
};

export default input;
