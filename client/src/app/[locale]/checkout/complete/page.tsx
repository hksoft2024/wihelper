import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { LocaleParam } from "~/@core/types";

type Props = {
	params: Promise<LocaleParam>;
};

export const generateMetadata = async (): Promise<Metadata> => {
	const t = await getTranslations();

	return {
		title: t("CHECKOUT_COMPLETE"),
	};
};

const CheckoutCompletePage = async ({ params }: Props) => {
	const [t, { locale }] = await Promise.all([getTranslations(), params]);

	return (
		<Box pt={12} pb={18}>
			<Container>
				<Card variant="outlined" sx={{ px: 5, py: 9, mt: 4 }}>
					<Typography component="h2" variant="h4" mb={7} textAlign="center">
						{t("ORDER_SUCCESS_MESSAGE")}
					</Typography>
					<Stack spacing={2} mb={8}>
						<Typography
							textAlign="center"
							variant="body2"
							color="textSecondary"
						>
							{t("ORDER_PLACED_MESSAGE")}
						</Typography>
						<Typography
							textAlign="center"
							variant="body2"
							color="textSecondary"
						>
							{t.rich("ORDER_NUMBER_NOTIFICATION", {
								important: () => (
									<Typography component="span" variant="body2" fontWeight={500}>
										34VB5540K83
									</Typography>
								),
							})}
						</Typography>
						<Typography
							textAlign="center"
							variant="body2"
							color="textSecondary"
							component="div"
							dangerouslySetInnerHTML={{
								__html: t.raw("ORDER_EMAIL_CONFIRMATION_NOTICE"),
							}}
						/>
					</Stack>
					<Stack
						direction="row"
						alignItems="center"
						justifyContent="center"
						gap={4}
						flexWrap="wrap"
					>
						<Button
							LinkComponent={Link}
							href={`/${locale}/products`}
							size="large"
							sx={{
								bgcolor: "#f3f5f9",
								color: "text.primary",
								":hover": { bgcolor: "#d8deeb" },
								width: { xs: 1, sm: "auto" },
							}}
						>
							{t("GO_BACK_SHOPPING")}
						</Button>
						<Button
							size="large"
							startIcon={<LocationOnOutlinedIcon />}
							sx={{ width: { xs: 1, sm: "auto" } }}
						>
							{t("TRACK_ORDER")}
						</Button>
					</Stack>
				</Card>
			</Container>
		</Box>
	);
};

export default CheckoutCompletePage;
