"use client";

import CachedOutlinedIcon from "@mui/icons-material/CachedOutlined";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useTranslations } from "next-intl";
import { CartItem as TCartItem } from "~/types/cart";
import CartItem from "./CartItem";

type Props = {
	items: TCartItem[];
};

const CartItems = ({ items }: Props) => {
	const t = useTranslations();

	return (
		<Stack spacing={6}>
			<Box>
				{items.map((item, index) => (
					<CartItem key={index} item={item} />
				))}
			</Box>

			<Button
				variant="outlined"
				color="secondary"
				size="large"
				startIcon={<CachedOutlinedIcon />}
			>
				{t("UPDATE_CART")}
			</Button>
		</Stack>
	);
};

export default CartItems;
