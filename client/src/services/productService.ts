import http from "~/libs/http";
import { PaginatedData, PaginationQuery } from "~/types/common";
import { Product, ProductReview, ProductReviewsQuery } from "~/types/product";

const getProducts = async (query?: PaginationQuery) => {
	return await http.get<PaginatedData<Product>>("/products/getdetailpaging", {
		apiClassification: "data",
		next: { tags: ["products"] },
		query,
	});
};

const getProductById = async (id: string) => {
	return await http.get<Product>("/products/getdetailbyid", {
		apiClassification: "data",
		next: { tags: [`product-${id}`] },
		query: { id },
	});
};

const getProductsStyleWith = async (productId: string) => {
	return await http.get<Product[]>("/products/getstylewith", {
		apiClassification: "data",
		next: { tags: [`products-style-with-${productId}`] },
		query: { id: productId },
	});
};

const getProductsAlsoLike = async (productId: string) => {
	return await http.get<Product[]>("/products/getalsolike", {
		apiClassification: "data",
		next: { tags: [`products-also-like-${productId}`] },
		query: { id: productId },
	});
};

const getProductReviews = async (query: ProductReviewsQuery) => {
	return await http.get<PaginatedData<ProductReview>>(
		"/products/getreviewpaging",
		{
			apiClassification: "data",
			next: { tags: [`product-${query.productId}-reviews`] },
			query,
		}
	);
};

const getBestSellingProducts = async () => {
	return await http.get<Product[]>("/products/bestselling", {
		apiClassification: "data",
		next: { tags: ["products-best-selling"] },
	});
};

const getTopRatedProducts = async () => {
	return await http.get<Product[]>("/products/toprated", {
		apiClassification: "data",
		next: { tags: ["products-top-rated"] },
	});
};

const getNewestProducts = async () => {
	return await http.get<Product[]>("/products/newest", {
		apiClassification: "data",
		next: { tags: ["products-newest"] },
	});
};

const productService = {
	getProducts,
	getProductById,
	getProductsStyleWith,
	getProductsAlsoLike,
	getProductReviews,
	getBestSellingProducts,
	getTopRatedProducts,
	getNewestProducts,
};

export default productService;
