import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { getTranslations } from "next-intl/server";
import { CART_ITEMS } from "~/fake-data/cart";
import CartItem from "../../cart/CartItem";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid2";

type Props = {};

const ReviewOrder = async (props: Props) => {
	const t = await getTranslations();

	return (
		<Stack>
			<Typography
				component="h2"
				variant="h6"
				pb={4}
				mb={4}
				borderBottom={1}
				borderColor="divider"
			>
				{t("REVIEW_YOUR_ORDER")}
			</Typography>

			<Box>
				{CART_ITEMS.map((item, index) => (
					<CartItem key={index} item={item} viewOnly />
				))}
			</Box>
			<Card elevation={0} sx={{ bgcolor: "#f6f9fc", p: 6, mt: 4 }}>
				<Grid container columnSpacing={7.5} rowSpacing={4}>
					<Grid size={{ xs: 12, sm: 6 }}>
						<Stack spacing={2}>
							<Typography fontWeight={500} mb={4}>
								{t("SHIPPING_TO")}
							</Typography>
							<Stack spacing={2}>
								<Stack direction="row" alignItems="center" gap={1}>
									<Typography variant="body2" color="textMuted">
										{t("CLIENT")}
									</Typography>
									<Typography variant="body2" color="textSecondary">
										Susan Gardner
									</Typography>
								</Stack>
								<Stack direction="row" alignItems="center" gap={1}>
									<Typography variant="body2" color="textMuted">
										{t("ADDRESS")}
									</Typography>
									<Typography variant="body2" color="textSecondary">
										44 Shirley Ave. West Chicago, IL 60185, USA
									</Typography>
								</Stack>
								<Stack direction="row" alignItems="center" gap={1}>
									<Typography variant="body2" color="textMuted">
										{t("PHONE")}
									</Typography>
									<Typography variant="body2" color="textSecondary">
										+1 (808) 764 554 330
									</Typography>
								</Stack>
							</Stack>
						</Stack>
					</Grid>
					<Grid size={{ xs: 12, sm: 6 }}>
						<Stack spacing={2}>
							<Typography fontWeight={500} mb={4}>
								{t("PAYMENT_METHOD")}
							</Typography>
							<Stack spacing={2}>
								<Stack direction="row" alignItems="center" gap={1}>
									<Typography variant="body2" color="textMuted">
										{t("CREDIT_CARD")}
									</Typography>
									<Typography variant="body2" color="textSecondary">
										**** **** **** 5300
									</Typography>
								</Stack>
							</Stack>
						</Stack>
					</Grid>
				</Grid>
			</Card>
		</Stack>
	);
};

export default ReviewOrder;
