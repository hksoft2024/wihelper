"use client";

import Button from "@mui/material/Button";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useTranslations } from "next-intl";

const ShoppingContinueButton = () => {
	const t = useTranslations();

	return (
		<Button variant="outlined" startIcon={<KeyboardArrowLeftIcon />}>
			{t("CONTINUE_SHOPPING")}
		</Button>
	);
};

export default ShoppingContinueButton;
