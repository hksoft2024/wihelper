import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { Suspense } from "react";
import { Locale } from "~/@core/types";
import PurchaseProducts from "~/components/views/home/purchase-products/PurchaseProducts";
import ProductsCarouselSkeleton from "../../products/shared/products-carousel/ProductsCarouselSkeleton";

type Props = {
	locale: Locale;
};

const PurchaseProductsSection = async ({ locale }: Props) => {
	const t = await getTranslations();

	return (
		<Box component="section">
			<Container>
				<Box pt={12} mb={6}>
					<Stack
						direction="row"
						alignItems="end"
						justifyContent="space-between"
						gap={2}
						flexWrap="wrap"
						pt={1}
						pb={6}
						mb={6}
						borderBottom={1}
						borderColor="divider"
					>
						<Typography variant="h2" pt={4}>
							{t("PURCHASE_PRODUCTS")}
						</Typography>
						<Button
							variant="outlined"
							color="secondary"
							endIcon={<KeyboardArrowRightIcon />}
							LinkComponent={Link}
							href={`/${locale}/products`}
						>
							{t("MORE_PRODUCTS")}
						</Button>
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
