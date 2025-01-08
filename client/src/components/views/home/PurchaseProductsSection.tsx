import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Suspense } from "react";
import PurchaseProducts from "~/components/views/home/purchase-products";
import MoreProductsButton from "~/components/views/home/purchase-products/MoreProductsButton";
import ProductCardSkeleton from "~/components/views/products/shared/product-card/ProductCardSkeleton";

const PurchaseProductsSection = () => {
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

					<Suspense
						fallback={
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
						}
					>
						<PurchaseProducts />
					</Suspense>
				</Box>
			</Container>
		</Box>
	);
};

export default PurchaseProductsSection;
