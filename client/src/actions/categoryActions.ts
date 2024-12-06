"use server";

import categoryService from "~/services/categoryService";

export const getAllCategories = async () => {
	return await categoryService.getAllCategories();
};
