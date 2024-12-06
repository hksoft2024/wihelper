import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";
import React from "react";
import Button from "~/@core/components/mui/Button";

const Banner = () => {
	const t = useTranslations();

	return (
		<Stack
			direction="row"
			alignItems="center"
			bgcolor="#f6f9fc"
			borderRadius={2}
		>
			<Stack flex={1} ml={4} px={6} py={12}>
				<Typography variant="h4" fontSize={18} mb={2} fontWeight={300}>
					Converse All Star
				</Typography>

				<Typography variant="h3" mb={6}>
					Make Your Day Comfortable
				</Typography>

				<Box>
					<Button hasShadow>{t("SHOP_NOW")}</Button>
				</Box>
			</Stack>

			<Box flex={1} display="flex" sx={{ img: { width: 1 } }}>
				<img src="/images/shop/catalog/banner.jpg" alt="" />
			</Box>
		</Stack>
	);
};

export default Banner;
