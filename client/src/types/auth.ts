export interface LoginPayload {
	user_name: string;
	password: string;
	app_name: string;
}

export interface RefreshTokenPayload {
	app_name: string;
	refresh_token: string;
}

export interface AuthData {
	access_token: string;
	expires_in: number;
	token_type: string;
	refresh_token: string;
	scope: string;
}

export interface RegisterPayload {
	first_name: string;
	last_name: string;
	user_name: string;
	password: string;
	password_confirm: string;
	app_name: string;
}
