import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import { ToastContainer } from "react-toastify";
import AuthProvider from "~/@core/components/AuthProvider";
import ReactQueryProvider from "~/@core/components/ReactQueryProvider";
import ThemeProvider from "~/@core/components/ThemeProvider";
import { ChildrenType, LocaleParam } from "~/@core/types";
import ScrollTopButton from "~/components/ui/ScrollTopButton";
import themeConfig from "~/configs/themeConfig";
import "./globals.css";

const rubik = Rubik({
	weight: ["300", "400", "500", "600", "700"],
	display: "swap",
	preload: true,
	subsets: ["latin"],
	fallback: ["sans-serif"],
	adjustFontFallback: true,
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

const RootLayout = async ({ children, params: { locale } }: Props) => {
	return (
		<html lang={locale} suppressHydrationWarning>
			<body className={rubik.className}>
				<AuthProvider locale={locale}>
					<ReactQueryProvider>
						<ThemeProvider>
							<ToastContainer
								position={themeConfig.toast_position}
								autoClose={3000}
							/>

							<ScrollTopButton />

							{children}
						</ThemeProvider>
					</ReactQueryProvider>
				</AuthProvider>
			</body>
		</html>
	);
};

export default RootLayout;
