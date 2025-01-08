"use server";

import productService from "~/services/productService";
import { ProductReviewsQuery } from "~/types/product";

export const getProductReviews = async (query: ProductReviewsQuery) => {
	return await productService.getProductReviews(query);
};
