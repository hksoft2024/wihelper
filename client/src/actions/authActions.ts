"use server";

import { signIn, signOut } from "~/auth";
import authService from "~/services/authService";
import { LoginPayload, RegisterPayload } from "~/types/auth";

export const login = async (payload: LoginPayload) => {
	try {
		await signIn("credentials", {
			...payload,
			redirect: false,
		});

		return { is_succeeded: true };
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (error: any) {
		return { is_succeeded: false, message: error.cause?.err?.message };
	}
};

export const logout = async () => {
	await signOut({ redirectTo: `/` });
};

export const register = async (payload: RegisterPayload) => {
	return await authService.register(payload);
};
