export type Product = {
	category_name: string;
	name: string;
	current_price?: string;
	original_price: string;
	rating: number;
	quantity: number;
	thumbnail_url: string;
	badge?: string;
	badge_color?: "primary" | "error" | "info";
	href: string;
};
