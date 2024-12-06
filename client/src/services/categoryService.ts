import http from "~/libs/http";
import { Category } from "~/types/category";

const getAllCategories = async () => {
	return await http.get<Category[]>("/categorys/getall", {
		apiClassification: "data",
		withAuth: true,
		next: { tags: ["categories"] },
	});
};

const categoryService = {
	getAllCategories,
};

export default categoryService;
