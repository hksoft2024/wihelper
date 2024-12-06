import Grid from "@mui/material/Grid2";
import { Fragment } from "react";
import { PRODUCTS } from "~/fake-data/product";
import Banner from "./Banner";
import ProductCard from "./shared/ProductCard";

const ProductsGrid = () => {
	return (
		<Grid container columnSpacing={4} rowSpacing={6}>
			{PRODUCTS.map((product, index) => (
				<Fragment key={index}>
					<Grid size={{ xs: 12, sm: 6, md: 4 }}>
						<ProductCard product={product} />
					</Grid>

					{((PRODUCTS.length < 6 && index === PRODUCTS.length - 1) ||
						(PRODUCTS.length >= 6 && index === 5)) && (
						<Grid size={{ xs: 12 }}>
							<Banner />
						</Grid>
					)}
				</Fragment>
			))}
		</Grid>
	);
};

export default ProductsGrid;
