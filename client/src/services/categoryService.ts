import http from "~/libs/http";
import { Category } from "~/types/category";

const getAllCategories = async () => {
	return await http.get<Category[]>("/categorys/getall", {
		apiClassification: "data",
		next: { tags: ["categories"] },
	});
};

const getAllCategoriesWithSub = async () => {
	return await http.get<Category[]>("/categorys/getallwithsub", {
		apiClassification: "data",
		next: { tags: ["categories-with-subcategories"] },
	});
};

const categoryService = {
	getAllCategories,
	getAllCategoriesWithSub,
};

export default categoryService;
