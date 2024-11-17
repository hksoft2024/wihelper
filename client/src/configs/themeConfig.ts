import { PaletteMode } from "@mui/material/styles";
import { ToastPosition } from "react-toastify";

export type ThemeConfig = {
	app_name: string;
	home_page_url: string;
	disableRipple: boolean;
	toast_position: ToastPosition;
	mode: PaletteMode;
};

const themeConfig: ThemeConfig = {
	app_name: "wiHelper",
	home_page_url: "/",
	disableRipple: true,
	toast_position: "top-right",
	mode: "light",
};

export default themeConfig;
