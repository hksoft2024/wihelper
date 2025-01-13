import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { getTranslations } from "next-intl/server";
import NegativeMarginContentWrapper from "~/@layouts/shared/NegativeMarginContentWrapper";
import CartItems from "~/components/views/cart/CartItems";
import CartSummary from "~/components/views/cart/CartSummary";
import ShoppingContinueButton from "~/components/views/cart/ShoppingContinueButton";
import { CART_ITEMS } from "~/fake-data/cart";

type Props = {};

const CartPage = async (props: Props) => {
	const t = await getTranslations();

	return (
		<NegativeMarginContentWrapper
			title={t("YOUR_CART")}
			breadcrumbs={[
				{ label: t("SHOP"), href: "/products" },
				{ label: t("CART") },
			]}
		>
			<Grid container spacing={{ xs: 6, lg: 7.5, xl: 16 }}>
				<Grid size={{ xs: 12, lg: 8 }}>
					<Stack
						direction="row"
						alignItems="center"
						justifyContent="space-between"
						mt={1}
						pt={4}
						pb={12}
					>
						<Typography component="h2" variant="h6" color="white">
							{t("PRODUCTS")}
						</Typography>

						<ShoppingContinueButton />
					</Stack>

					<CartItems items={CART_ITEMS} />
				</Grid>
				<Grid size={{ xs: 12, lg: 4 }}>
					<CartSummary />
				</Grid>
			</Grid>
		</NegativeMarginContentWrapper>
	);
};

export default CartPage;
