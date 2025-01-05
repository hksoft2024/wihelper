import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ProductsCarousel from "./ProductsCarousel";

const ProductSuggestions = () => {
	return (
		<Stack spacing={16}>
			<Box>
				<Typography variant="h3" pb={6} mb={4} textAlign="center">
					Style with
				</Typography>

				<ProductsCarousel name="style-with" />
			</Box>
			<Box>
				<Typography variant="h3" pb={6} mb={4} textAlign="center">
					You may also like
				</Typography>

				<ProductsCarousel name="also-like" />
			</Box>
		</Stack>
	);
};

export default ProductSuggestions;
