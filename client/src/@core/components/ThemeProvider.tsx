"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import MuiThemeProvider from "@mui/material/styles/ThemeProvider";
import theme from "../theme";
import { ChildrenType } from "../types";
import themeConfig from "~/configs/themeConfig";

type Props = ChildrenType;

const ThemeProvider = ({ children }: Props) => {
	return (
		<AppRouterCacheProvider>
			<MuiThemeProvider theme={theme} defaultMode={themeConfig.mode}>
				<CssBaseline />
				{children}
			</MuiThemeProvider>
		</AppRouterCacheProvider>
	);
};

export default ThemeProvider;
