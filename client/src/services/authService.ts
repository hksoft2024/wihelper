import http from "~/libs/http";
import { AuthData, LoginPayload, RefreshTokenPayload } from "~/types/auth";

const login = async (payload: LoginPayload) => {
	return await http.post<AuthData>("/logins", payload, {
		apiClassification: "identity",
	});
};

const refreshToken = async (payload: RefreshTokenPayload) => {
	return await http.post<AuthData>("/logins/refresh-token", payload, {
		apiClassification: "identity",
	});
};

const authService = { login, refreshToken };

export default authService;
