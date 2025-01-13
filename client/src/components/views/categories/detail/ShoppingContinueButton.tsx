"use client";

import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";
import React from "react";
import { Link } from "~/i18n/routing";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ShoppingContinueButton = () => {
	const t = useTranslations();

	return (
		<Typography
			variant="body2"
			component={Link}
			href="/products"
			color="error"
			display="flex"
			alignItems="center"
			gap={1}
		>
			{t("CONTINUE_SHOPPING")}
			<ArrowForwardIosIcon sx={{ fontSize: 14 }} />
		</Typography>
	);
};

export default ShoppingContinueButton;
