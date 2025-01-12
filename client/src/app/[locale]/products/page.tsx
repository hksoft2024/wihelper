import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid2";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import NegativeMarginContentWrapper from "~/@layouts/shared/NegativeMarginContentWrapper";
import ProductsGrid from "~/components/views/products/list/ProductsGrid";
import ProductsPagination from "~/components/views/products/list/ProductsPagination";
import ProductsToolbar from "~/components/views/products/list/toolbar";
import Widgets from "~/components/views/products/list/widgets";
import { DEFAULT_PAGE_INDEX, DEFAULT_PAGE_SIZE } from "~/constants/common";
import productService from "~/services/productService";
import { PaginationQuery } from "~/types/common";
import commonSchemas from "~/validations/commonSchemas";

export const generateMetadata = async (): Promise<Metadata> => {
	const t = await getTranslations();

	return {
		title: t("PRODUCTS"),
	};
};

type Props = {
	searchParams: Promise<Record<string, string>>;
};

const ProductsPage = async (props: Props) => {
	const searchParams = await props.searchParams;
	const t = await getTranslations();

	const parseQuery = await commonSchemas(t).paginationSchema.safeParseAsync(
		searchParams
	);

	const query: PaginationQuery = parseQuery.data ?? {
		PageIndex: DEFAULT_PAGE_INDEX,
		PageSize: DEFAULT_PAGE_SIZE,
	};

	const res = await productService.getProducts(query);

	if (!res.is_succeeded) {
		throw new Error();
	}

	return (
		<NegativeMarginContentWrapper
			title={t("GO_SHOPPING")}
			breadcrumbs={[{ label: t("PRODUCTS") }]}
		>
			<Grid container spacing={7.5}>
				<Grid size={{ xs: 0, lg: 4 }} display={{ xs: "none", lg: "block" }}>
					<Widgets />
				</Grid>
				<Grid size={{ xs: 12, lg: 8 }}>
					<ProductsToolbar data={res.data} />

					<ProductsGrid data={res.data} />

					<Divider sx={{ my: 4 }} />

					<ProductsPagination data={res.data} />
				</Grid>
			</Grid>
		</NegativeMarginContentWrapper>
	);
};

export default ProductsPage;
