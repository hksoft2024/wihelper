import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ProductCard from "~/components/views/products/shared/product-card";
import { PURCHASE_PRODUCTS } from "~/fake-data/home-page";
import MoreProductsButton from "./MoreProductsButton";

const PurchaseProducts = () => {
	return (
		<Box component="section">
			<Container>
				<Box pt={12} mb={6}>
					<Stack
						direction="row"
						alignItems="center"
						justifyContent="space-between"
						gap={2}
						pt={1}
						pb={6}
						mb={6}
						borderBottom={1}
						borderColor="divider"
					>
						<Typography variant="h2" pt={4}>
							Purchase products
						</Typography>

						<MoreProductsButton />
					</Stack>

					<Grid container spacing={4}>
						{PURCHASE_PRODUCTS.map((product, index) => (
							<Grid key={index} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
								<ProductCard product={product} showCompareAction />
							</Grid>
						))}
					</Grid>
				</Box>
			</Container>
		</Box>
	);
};

export default PurchaseProducts;
