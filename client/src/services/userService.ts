import http from "~/libs/http";
import { User } from "~/types/user";

const getUserInfo = async (accessToken: string) => {
	return http.get<User>(`/users/getuserinfo`, {
		apiClassification: "identity",
		headers: { Authorization: `Bearer ${accessToken}` },
	});
};

const userService = {
	getUserInfo,
};

export default userService;
