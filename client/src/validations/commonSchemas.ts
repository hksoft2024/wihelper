import { z } from "zod";
import { Translation } from "~/@core/types";
import { DEFAULT_PAGE_SIZE } from "~/constants/common";

const commonSchemas = (t: Translation) => {
	const paginationSchema = z.object({
		PageIndex: z.number({ coerce: true }).min(1).default(1),
		PageSize: z.number({ coerce: true }).default(DEFAULT_PAGE_SIZE),
	});

	return { paginationSchema };
};

export default commonSchemas;
