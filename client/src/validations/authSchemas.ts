import { z } from "zod";
import { Translation } from "~/@core/types";

const authSchemas = (t: Translation) => {
	const loginSchema = z.object({
		user_name: z.string().min(1, t("MESSAGE.BLANK_INPUT")),
		password: z.string().min(1, t("MESSAGE.BLANK_INPUT")),
		app_name: z.string().min(1, t("MESSAGE.BLANK_INPUT")),
	});

	const registerSchema = z
		.object({
			first_name: z.string().min(1, t("MESSAGE.BLANK_INPUT")),
			last_name: z.string().min(1, t("MESSAGE.BLANK_INPUT")),
			user_name: z.string().min(1, t("MESSAGE.BLANK_INPUT")),
			password: z.string().min(1, t("MESSAGE.BLANK_INPUT")),
			password_confirm: z.string().min(1, t("MESSAGE.BLANK_INPUT")),
			app_name: z.string().min(1, t("MESSAGE.BLANK_INPUT")),
		})
		.refine((data) => data.password === data.password_confirm, {
			message: t("MESSAGE.PASSWORD_MISMATCH"),
			path: ["password_confirm"],
		});

	return { loginSchema, registerSchema };
};

export default authSchemas;
