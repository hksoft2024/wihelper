"use server";

import productService from "~/services/productService";
import { ProductReviewsQuery } from "~/types/product";

export const getProductReviews = async (query: ProductReviewsQuery) => {
	return await productService.getProductReviews(query);
};

export const getProductsStyleWith = async (productId: string) => {
	return await productService.getProductsStyleWith(productId);
};

export const getProductsAlsoLike = async (productId: string) => {
	return await productService.getProductsAlsoLike(productId);
};
