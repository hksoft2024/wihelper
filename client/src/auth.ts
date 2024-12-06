import NextAuth, { NextAuthConfig } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import { getTranslations } from "next-intl/server";
import userService from "~/services/userService";
import { LoginPayload } from "~/types/auth";
import authService from "./services/authService";

const authConfig: NextAuthConfig = {
	session: {
		strategy: "jwt",
		maxAge: 30 * 24 * 60 * 60, // ** 30 days
	},
	providers: [
		CredentialProvider({
			name: "Credentials",
			type: "credentials",
			credentials: {
				user_name: {},
				password: {},
				app_name: {},
			},
			async authorize(credentials) {
				try {
					const payload = credentials as LoginPayload;

					if (!payload) {
						return null;
					}

					const loginRes = await authService.login(payload);

					if (!loginRes.is_succeeded) {
						throw new Error(loginRes.message);
					}

					const getUserInfoRes = await userService.getUserInfo(
						loginRes.data.access_token
					);

					if (!getUserInfoRes.is_succeeded) {
						throw new Error(getUserInfoRes.message);
					}

					return {
						id: getUserInfoRes.data.id,
						full_name: getUserInfoRes.data.full_name,
						user_name: getUserInfoRes.data.user_name,
						...loginRes.data,
						expires_in:
							Date.now() + loginRes.data.expires_in * 60 * 1000 - 30 * 1000, // 30s Deduction
					};
				} catch (error) {
					const t = await getTranslations();

					throw new Error((error as Error).message ?? t("MESSAGE.LOGIN_FAIL"));
				}
			},
		}),
	],
	callbacks: {
		async jwt({ token, user }) {
			if (user) {
				token.user = user;
			} else if (token.user.expires_in <= Date.now()) {
				console.log("Before refresh token", token.user);

				const res = await authService.refreshToken({
					app_name: "Patients",
					refresh_token: token.user.refresh_token,
				});

				console.log("Res refresh token", res);

				if (!res.is_succeeded) return null;

				token.user = {
					...token.user,
					...res.data,
					expires_in: Date.now() + res.data.expires_in * 60 * 1000 - 30 * 1000, // 30s Deduction
				};

				console.log("After refresh token", token.user);
			}

			return token;
		},
		async session({ session, token }) {
			session.user = {
				...token.user,
				id: token.user.id ?? "",
				email: "",
				emailVerified: new Date(),
			};

			return session;
		},
	},
};

export const { handlers, signIn, signOut, auth } = NextAuth(authConfig);
