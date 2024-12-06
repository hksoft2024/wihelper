import { AuthData } from "~/types/auth";
import "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
	interface User extends AuthData {
		id?: string;
		full_name: string;
		user_name: string;
	}

	interface Session {
		user: AuthData & {
			id?: string;
			full_name: string;
			user_name: string;
		};
	}
}

declare module "next-auth/jwt" {
	interface JWT {
		user: AuthData & {
			id?: string;
			full_name: string;
			user_name: string;
		};
	}
}
