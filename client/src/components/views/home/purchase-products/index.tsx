import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Suspense } from "react";
import MoreProductsButton from "~/components/views/home/purchase-products/MoreProductsButton";
import PurchaseProducts from "~/components/views/home/purchase-products/PurchaseProducts";
import ProductsCarouselSkeleton from "../../products/shared/products-carousel/ProductsCarouselSkeleton";

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

					<Suspense fallback={<ProductsCarouselSkeleton />}>
						<PurchaseProducts />
					</Suspense>
				</Box>
			</Container>
		</Box>
	);
};

export default PurchaseProductsSection;
