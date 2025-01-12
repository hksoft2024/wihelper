import Grid from "@mui/material/Grid2";
import { Fragment } from "react";
import { PaginatedData } from "~/types/common";
import { Product } from "~/types/product";
import ProductCard from "../shared/product-card";
import Banner from "./Banner";

type Props = {
	data: PaginatedData<Product>;
};

const ProductsGrid = ({ data }: Props) => {
	return (
		<Grid container columnSpacing={4} rowSpacing={6}>
			{data.items.map((product, index) => (
				<Fragment key={product.id}>
					<Grid size={{ xs: 12, sm: 6, md: 4 }}>
						<ProductCard product={product} />
					</Grid>

					{((data.items.length < 6 && index === data.items.length - 1) ||
						(data.items.length >= 6 && index === 5)) && (
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
