import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import categoryService from "~/services/categoryService";
import { Category } from "~/types/category";
import BrandWidget from "./BrandWidget";
import CategoryWidget from "./CategoryWidget";
import ColorWidget from "./ColorWidget";
import PriceWidget from "./PriceWidget";
import SizeWidget from "./SizeWidget";

const Widgets = async () => {
	let categories: Category[] = [];

	const res = await categoryService.getAllCategories();

	if (res.is_succeeded) {
		categories = res.data;
	}

	return (
		<Paper
			sx={{
				py: 8.5,
				px: 7.5,
				mr: 9.5,
				borderRadius: 2,
			}}
		>
			<Stack divider={<Divider sx={{ my: 6 }} />}>
				<CategoryWidget categories={categories} />
				<PriceWidget />
				<BrandWidget />
				<SizeWidget />
				<ColorWidget />
			</Stack>
		</Paper>
	);
};

export default Widgets;
