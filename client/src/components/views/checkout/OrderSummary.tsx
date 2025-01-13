"use client";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";
import Image from "~/components/ui/Image";
import { CheckoutStep } from "~/enums/CheckoutStep";
import { CART_ITEMS } from "~/fake-data/cart";
import { Link } from "~/i18n/routing";

type Props = {
	currentStep: CheckoutStep;
};

const OrderSummary = ({ currentStep }: Props) => {
	const t = useTranslations();

	return (
		<Card sx={{ p: 6 }}>
			<Stack px={{ xl: 2 }} py={2}>
				<Typography component="h2" variant="h5" textAlign="center" mb={2.5}>
					{t("ORDER_SUMMARY")}
				</Typography>

				{currentStep !== CheckoutStep.Review && (
					<List disablePadding>
						{CART_ITEMS.map((item, index) => (
							<ListItem
								key={index}
								disableGutters
								sx={{
									direction: "row",
									borderBottom: 1,
									borderColor: "divider",
								}}
							>
								<Stack flex={1} direction="row" alignItems="center" gap={2}>
									<Image
										src={item.product_image_url}
										alt={item.product_name}
										containerSx={{ width: 64, height: 64 }}
									/>

									<Stack>
										<Typography
											component={Link}
											href="#"
											variant="body2"
											fontWeight={500}
											sx={{
												":hover": {
													color: "primary.main",
												},
											}}
										>
											{item.product_name}
										</Typography>

										<Typography>
											<Typography
												component="span"
												color="secondary"
												fontSize={14}
												mr={2}
											>
												{item.product_price}
											</Typography>
											<Typography
												component="span"
												fontSize={14}
												color="textMuted"
											>
												x {item.product_quantity}
											</Typography>
										</Typography>
									</Stack>
								</Stack>
							</ListItem>
						))}
					</List>
				)}

				<Stack spacing={1.5} mt={4}>
					<Stack
						direction="row"
						alignItems="center"
						justifyContent="space-between"
						gap={2}
					>
						<Typography variant="body2" color="textSecondary">
							{t("SUBTOTAL")}
						</Typography>
						<Typography variant="body2" color="textSecondary">
							$265.00
						</Typography>
					</Stack>
					<Stack
						direction="row"
						alignItems="center"
						justifyContent="space-between"
						gap={2}
					>
						<Typography variant="body2" color="textSecondary">
							{t("PAY_VIA_INSURANCE")}
						</Typography>
						<Typography variant="body2" color="textSecondary">
							{t("YES")}
						</Typography>
					</Stack>
					<Stack
						direction="row"
						alignItems="center"
						justifyContent="space-between"
						gap={2}
					>
						<Typography variant="body2" color="textSecondary">
							{t("SHIPPING")}
						</Typography>
						<Typography variant="body2" color="textSecondary">
							-
						</Typography>
					</Stack>
					<Stack
						direction="row"
						alignItems="center"
						justifyContent="space-between"
						gap={2}
					>
						<Typography variant="body2" color="textSecondary">
							{t("TAXES")}
						</Typography>
						<Typography variant="body2" color="textSecondary">
							$9.50
						</Typography>
					</Stack>
					<Stack
						direction="row"
						alignItems="center"
						justifyContent="space-between"
						gap={2}
					>
						<Typography variant="body2" color="textSecondary">
							{t("DISCOUNT")}
						</Typography>
						<Typography variant="body2" color="textSecondary">
							-
						</Typography>
					</Stack>
				</Stack>

				<Divider sx={{ my: 4 }} />

				<Typography
					variant="h3"
					fontWeight={400}
					textAlign="center"
					mt={2}
					mb={6}
				>
					$274.50
				</Typography>

				<Stack spacing={4}>
					<TextField placeholder={t("PROMO_CODE")} />
					<Button size="large" variant="outlined">
						{t("APPLY_PROMO_CODE")}
					</Button>
				</Stack>
			</Stack>
		</Card>
	);
};

export default OrderSummary;
