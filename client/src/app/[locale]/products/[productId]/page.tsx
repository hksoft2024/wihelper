import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Fragment } from "react";
import { Locale } from "~/@core/types";
import NegativeMarginContentWrapper from "~/@layouts/shared/NegativeMarginContentWrapper";
import ProductDetailSection from "~/components/views/products/detail/product-detail";
import ProductReviewsSection from "~/components/views/products/detail/product-reviews";
import ProductDescriptionSection from "~/components/views/products/detail/ProductDescriptionSection";
import ProductReviewStatisticsSection from "~/components/views/products/detail/ProductReviewStatisticsSection";
import ProductSuggestionsSection from "~/components/views/products/detail/ProductSuggestionsSection";
import productService from "~/services/productService";

type Props = {
	params: Promise<{ productId: string; locale: Locale }>;
};

export const generateMetadata = async ({
	params,
}: Props): Promise<Metadata> => {
	const productId = (await params).productId;
	const res = await productService.getProductById(productId);

	if (!res.is_succeeded) {
		if (res.code === 404) {
			notFound();
		} else {
			throw new Error();
		}
	}

	return {
		title: res.data.name,
	};
};

// export const generateStaticParams = async () => {
// 	const res = await productService.getProducts();

// 	if (!res.is_succeeded) return [];

// 	return res.data.items.map((product) => ({
// 		productId: product.id,
// 	}));
// };

const ProductDetailPage = async ({ params }: Props) => {
	const { productId } = await params;
	const t = await getTranslations();

	const res = await productService.getProductById(productId);

	if (!res.is_succeeded) {
		if (res.code === 404) {
			notFound();
		} else {
			throw new Error();
		}
	}

	return (
		<Fragment>
			<NegativeMarginContentWrapper
				title={res.data.name}
				breadcrumbs={[
					{ label: t("SHOP"), href: "/products" },
					{ label: t("PRODUCT") },
				]}
			>
				<Card sx={{ mb: 12, overflow: "visible" }}>
					<CardContent sx={{ px: 6 }}>
						<ProductDetailSection product={res.data} />
					</CardContent>
				</Card>

				<ProductDescriptionSection />
			</NegativeMarginContentWrapper>

			<Box borderTop={1} borderBottom={1} borderColor="divider" py={12} my={4}>
				<Container>
					<Box pt={2}>
						<Box pb={4}>
							<ProductReviewStatisticsSection product={res.data} />
						</Box>

						<Divider sx={{ mt: 6, mb: 4 }} />

						<Box pt={6}>
							<ProductReviewsSection />
						</Box>
					</Box>
				</Container>
			</Box>

			<Container>
				<Box mb={4} py={12}>
					<ProductSuggestionsSection productId={productId} />
				</Box>
			</Container>
		</Fragment>
	);
};

export default ProductDetailPage;
