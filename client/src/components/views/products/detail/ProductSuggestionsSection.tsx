import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ProductsCarousel from "../shared/ProductsCarousel";
import productService from "~/services/productService";
import { Product } from "~/types/product";

type Props = {
	productId: string;
};

const ProductSuggestionsSection = async ({ productId }: Props) => {
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
					Style with
				</Typography>

				<ProductsCarousel
					name="style-with"
					products={styleWithProducts}
					shouldLoadingOnInit
				/>
			</Box>
			<Box>
				<Typography variant="h3" pb={6} mb={4} textAlign="center">
					You may also like
				</Typography>

				<ProductsCarousel
					name="also-like"
					products={alsoLikeProducts}
					shouldLoadingOnInit
				/>
			</Box>
		</Stack>
	);
};

export default ProductSuggestionsSection;
