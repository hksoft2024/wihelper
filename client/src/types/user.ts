export type User = {
	id: string;
	user_name: string;
	first_name: string;
	last_name: string;
	full_name: string;
	email: string | null;
	address: string | null;
	phone_number: string | null;
	provider_id: string | null;
	actived: boolean;
	actived_provider: boolean;
};
