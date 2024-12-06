"use client";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Button from "@mui/material/Button";
import { Link } from "~/i18n/routing";

const MoreProductsButton = () => {
	return (
		<Button
			variant="outlined"
			color="secondary"
			endIcon={<KeyboardArrowRightIcon />}
			LinkComponent={Link}
			href="/products"
		>
			More products
		</Button>
	);
};

export default MoreProductsButton;
