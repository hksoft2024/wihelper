import http from "~/libs/http";
import {
	AuthData,
	LoginPayload,
	RefreshTokenPayload,
	RegisterPayload,
} from "~/types/auth";
import { User } from "~/types/user";

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

const register = async (payload: RegisterPayload) => {
	return await http.post<User>("/users/register-user", payload, {
		apiClassification: "identity",
	});
};
const authService = { login, refreshToken, register };

export default authService;
