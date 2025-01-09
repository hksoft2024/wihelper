export type Category = {
	id: string;
	name: string;
	description: string | null;
	image: string;
	product_count: number;
	subcategories: Category[];
};
