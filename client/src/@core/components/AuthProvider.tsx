"use client";

import { SessionProvider, useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { logout } from "~/actions/authActions";
import { ChildrenType, Locale } from "../types";

type Props = ChildrenType & {
	locale: Locale;
};

const AuthGuard = ({ children, locale }: Props) => {
	const { status } = useSession();
	const pathname = usePathname();
	const router = useRouter();

	useEffect(() => {
		const isProtectedRoute = pathname.startsWith(`/${locale}`);

		if (status === "unauthenticated" && isProtectedRoute) {
			const handleLogout = async () => {
				await logout();

				router.push(`/${locale}`);
			};

			handleLogout();
		}
	}, [status, pathname, router, locale]);

	return children;
};

const AuthProvider = ({ children, locale }: Props) => {
	return (
		<SessionProvider>
			<AuthGuard locale={locale}>{children}</AuthGuard>
		</SessionProvider>
	);
};

export default AuthProvider;
