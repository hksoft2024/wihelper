import Grid from "@mui/material/Grid2";
import ProductCardSkeleton from "../product-card/ProductCardSkeleton";

const ProductsCarouselSkeleton = () => {
	return (
		<Grid container spacing={7.5}>
			<Grid size={{ xs: 12, sm: 6, md: 4, xl: 3 }}>
				<ProductCardSkeleton />
			</Grid>
			<Grid size={{ xs: 12, sm: 6, md: 4, xl: 3 }}>
				<ProductCardSkeleton />
			</Grid>
			<Grid size={{ xs: 12, sm: 6, md: 4, xl: 3 }}>
				<ProductCardSkeleton />
			</Grid>
			<Grid size={{ xs: 12, sm: 6, md: 4, xl: 3 }}>
				<ProductCardSkeleton />
			</Grid>
		</Grid>
	);
};

export default ProductsCarouselSkeleton;
