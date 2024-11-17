import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import { ToastContainer } from "react-toastify";
import ThemeProvider from "~/@core/components/ThemeProvider";
import { ChildrenType, LocaleParam } from "~/@core/types";
import themeConfig from "~/configs/themeConfig";
import "./globals.css";

const rubik = Rubik({
	weight: ["300", "400", "500", "600", "700"],
	display: "swap",
	preload: true,
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: {
		template: `%s | ${themeConfig.app_name}`,
		default: themeConfig.app_name,
	},
};

type Props = ChildrenType & {
	params: LocaleParam;
};

const RootLayout = ({ children, params: { locale } }: Props) => {
	return (
		<html lang={locale} suppressHydrationWarning>
			<body className={rubik.className}>
				<ThemeProvider>
					<ToastContainer
						position={themeConfig.toast_position}
						autoClose={3000}
					/>

					{children}
				</ThemeProvider>
			</body>
		</html>
	);
};

export default RootLayout;
