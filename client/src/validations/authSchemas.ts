import { z } from "zod";
import { Translation } from "~/@core/types";

const authSchemas = (t: Translation) => {
	const loginSchema = z.object({
		user_name: z.string().min(1, t("MESSAGE.BLANK_INPUT")),
		password: z.string().min(1, t("MESSAGE.BLANK_INPUT")),
		app_name: z.string().min(1, t("MESSAGE.BLANK_INPUT")),
	});

	return { loginSchema };
};

export default authSchemas;
