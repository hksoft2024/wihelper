import createTheme from "@mui/material/styles/createTheme";
import overrides from "./overrides";
import themeConfig from "~/configs/themeConfig";
import shadows from "@mui/material/styles/shadows";

declare module "@mui/material/styles" {
	interface TypeText {
		muted: string;
	}

	interface TypeBackground {
		dark: string;
		darker: string;
	}
}

shadows[1] =
	"0 .25rem .5625rem -0.0625rem rgba(0,0,0,.03),0 .275rem 1.25rem -0.0625rem rgba(0,0,0,.05)";

const theme = createTheme({
	typography: (palette) => ({
		allVariants: {
			fontFamily: "inherit",
			color: palette.text.primary,
			lineHeight: 1.5,
		},
	}),
	palette: {
		mode: themeConfig.mode,
		primary: {
			main: "#fe696a",
			light: "#ff8a8a",
			dark: "#fe4042",
			contrastText: "#fff",
		},
		secondary: {
			main: "#4e53c8",
			dark: "#363a8c",
			light: "#7175d3",
			contrastText: "#fff",
		},
		text: {
			primary: "#373f50",
			secondary: "#4b566b",
			muted: "#7d879c",
		},
		background: {
			dark: "#373f50",
			darker: "#2b3445",
		},
		error: {
			main: "#f34770",
			dark: "#aa314e",
			light: "#f56b8c",
			contrastText: "#fff",
		},
		info: {
			main: "#69b3fe",
			dark: "#409efe",
			light: "#87c2fe",
			contrastText: "#fff",
		},
		warning: {
			main: "#fea569",
			dark: "#b17349",
			light: "#feb787",
			contrastText: "#fff",
		},
		success: {
			main: "#42d697",
			dark: "#2e9569",
			light: "#67deab",
			contrastText: "#fff",
		},
	},
	components: overrides(),
	spacing: (factor: number) => `${0.25 * factor}rem`,
	breakpoints: {
		values: {
			xs: 0,
			sm: 500,
			md: 768,
			lg: 992,
			xl: 1280,
		},
	},
	transitions: {
		duration: { standard: 250, enteringScreen: 250, leavingScreen: 250 },
		easing: { easeInOut: "ease-in-out" },
	},
	shadows,
});

export default theme;
