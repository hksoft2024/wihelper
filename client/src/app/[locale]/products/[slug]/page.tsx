import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Fragment } from "react";
import Breadcrumbs from "~/components/ui/Breadcrumbs";
import ProductDetail from "~/components/views/products/detail/product-detail";
import ProductReviews from "~/components/views/products/detail/product-reviews";
import ProductSuggestions from "~/components/views/products/detail/product-suggestions";
import ProductDescriptionSection from "~/components/views/products/detail/ProductDescriptionSection";
import ProductReviewStatistics from "~/components/views/products/detail/ProductReviewStatistics";

type Props = {
	params: {
		slug: string;
	};
};

export const generateMetadata = (): Metadata => {
	return {
		title: "Product Detail",
	};
};

const ProductDetailPage = async ({ params: { slug } }: Props) => {
	const t = await getTranslations();

	return (
		<Fragment>
			<Box bgcolor="background.dark" pt={6} pb={25.5}>
				<Container>
					<Stack
						direction={{ xs: "column-reverse", lg: "row" }}
						alignItems="center"
						justifyContent="space-between"
						py={{ xs: 2, lg: 3.75 }}
						gap={4}
					>
						<Typography variant="h3" color="white" fontWeight={500}>
							Sports Hooded Sweatshirt
						</Typography>

						<Breadcrumbs
							breadcrumbs={[
								{ label: t("SHOP"), href: "/products" },
								{ label: t("PRODUCT") },
							]}
						/>
					</Stack>
				</Container>
			</Box>

			<Container sx={{ transform: "translateY(-4.875rem)" }}>
				<Card sx={{ mb: 12, overflow: "visible" }}>
					<CardContent sx={{ px: 6 }}>
						<ProductDetail />
					</CardContent>
				</Card>

				<ProductDescriptionSection />
			</Container>

			<Box borderTop={1} borderBottom={1} borderColor="divider" py={12} my={4}>
				<Container>
					<Box pt={2}>
						<Box pb={4}>
							<ProductReviewStatistics />
						</Box>

						<Divider sx={{ mt: 6, mb: 4 }} />

						<Box pt={6}>
							<ProductReviews />
						</Box>
					</Box>
				</Container>
			</Box>

			<Container>
				<Box mb={4} py={12}>
					<ProductSuggestions />
				</Box>
			</Container>
		</Fragment>
	);
};

export default ProductDetailPage;
