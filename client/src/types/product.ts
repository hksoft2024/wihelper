import { Category } from "./category";
import { PaginationQuery } from "./common";

export type ProductMediaPreview = {
	id: string;
	product_id: string;
	url: string;
	type: "image" | "video";
};

export type ProductSize = {
	id: string;
	name: string;
};

export type ProductColor = {
	id: string;
	name: string;
	code: string;
};

export type ProductVariant = {
	id: string;
	sku: string;
	product_id: string;
	size: ProductSize;
	color: ProductColor;
	quantity: number;
	price: number;
};

export type ProductReviewOverview = {
	total: number;
	average: number;
	distribution: Record<"1" | "2" | "3" | "4" | "5", number>;
};

export type Product = {
	id: string;
	category: Category;
	name: string;
	description: string;
	current_price: number;
	original_price: number;
	rating: number;
	thumbnail_url: string;
	href: string | null;
	quantity: number;
	status: string | null;
	extra_information: string | null;
	media_previews: ProductMediaPreview[] | null;
	variants: ProductVariant[] | null;
	review_overview: ProductReviewOverview | null;
};

type ProductReviewer = {
	name: string;
	email: string;
	avatar_url: string;
};

export type ProductReview = {
	reviewer: ProductReviewer;
	date: string;
	rating: number;
	content: string;
	pros: string;
	cons: string;
	likes_count: number;
	dislikes_count: number;
};

export type ProductReviewsQuery = Pick<PaginationQuery, "PageSize"> & {
	productId: string;
};
