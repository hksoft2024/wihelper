"use server";

import productService from "~/services/productService";
import { ProductReviewsQuery } from "~/types/product";

export const getProductReviews = (query: ProductReviewsQuery) => {
	return productService.getProductReviews(query);
};

export const getProductsStyleWith = (productId: string) => {
	return productService.getProductsStyleWith(productId);
};

export const getProductsAlsoLike = (productId: string) => {
	return productService.getProductsAlsoLike(productId);
};
