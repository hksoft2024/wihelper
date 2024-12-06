import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Fragment } from "react";
import Breadcrumbs from "~/components/ui/Breadcrumbs";
import ProductsGrid from "~/components/views/products/ProductsGrid";
import ProductsPagination from "~/components/views/products/ProductsPagination";
import ProductsToolbar from "~/components/views/products/toolbar";
import Widgets from "~/components/views/products/widgets";

export const generateMetadata = async (): Promise<Metadata> => {
	const t = await getTranslations();

	return {
		title: t("PRODUCTS"),
	};
};

const ProductsPage = async () => {
	const t = await getTranslations();

	return (
		<Fragment>
			<Box bgcolor="background.dark" pt={6} pb={25.5}>
				<Container>
					<Stack
						direction="row"
						alignItems="center"
						justifyContent="space-between"
						py={4}
					>
						<Typography
							variant="h1"
							color="white"
							fontSize={28}
							fontWeight={500}
						>
							{t("GO_SHOPPING")}
						</Typography>

						<Breadcrumbs breadcrumbs={[{ label: t("PRODUCTS") }]} />
					</Stack>
				</Container>
			</Box>

			<Container sx={{ transform: "translateY(-4.875rem)" }}>
				<Grid container spacing={7.5}>
					<Grid size={{ xs: 0, lg: 4 }} display={{ xs: "none", lg: "block" }}>
						<Widgets />
					</Grid>
					<Grid size={{ xs: 12, lg: 8 }}>
						<ProductsToolbar />

						<ProductsGrid />

						<Divider sx={{ my: 4 }} />

						<ProductsPagination />
					</Grid>
				</Grid>
			</Container>
		</Fragment>
	);
};

export default ProductsPage;
