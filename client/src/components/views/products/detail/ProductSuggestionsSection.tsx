import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ProductsCarousel from "../shared/products-carousel";
import productService from "~/services/productService";
import { Product } from "~/types/product";
import { getTranslations } from "next-intl/server";

type Props = {
	productId: string;
};

const ProductSuggestionsSection = async ({ productId }: Props) => {
	const t = await getTranslations();

	let styleWithProducts: Product[] = [];
	let alsoLikeProducts: Product[] = [];

	const [styleWithProductsRes, alsoLikeProductsRes] = await Promise.all([
		productService.getProductsStyleWith(productId),
		productService.getProductsAlsoLike(productId),
	]);

	if (styleWithProductsRes.is_succeeded) {
		styleWithProducts = styleWithProductsRes.data;
	}

	if (alsoLikeProductsRes.is_succeeded) {
		alsoLikeProducts = alsoLikeProductsRes.data;
	}

	return (
		<Stack spacing={16}>
			<Box>
				<Typography variant="h3" pb={6} mb={4} textAlign="center">
					{t("STYLE_WITH")}
				</Typography>

				<ProductsCarousel name="style-with" products={styleWithProducts} />
			</Box>
			<Box>
				<Typography variant="h3" pb={6} mb={4} textAlign="center">
					{t("YOU_MAY_ALSO_LIKE")}
				</Typography>

				<ProductsCarousel name="also-like" products={alsoLikeProducts} />
			</Box>
		</Stack>
	);
};

export default ProductSuggestionsSection;
