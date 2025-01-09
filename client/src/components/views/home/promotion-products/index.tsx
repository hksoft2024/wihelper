import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import productService from "~/services/productService";
import { Product } from "~/types/product";
import PromotionProductsCarousel from "./PromotionProductsCarousel";

const PromotionProductsSection = async () => {
	let products: Product[] = [];

	const res = await productService.getNewestProducts();

	if (res.is_succeeded) {
		products = res.data;
	}

	return (
		<Box component="section" pt={6} pb={7.5}>
			<Container>
				<PromotionProductsCarousel products={products} />
			</Container>
		</Box>
	);
};

export default PromotionProductsSection;
