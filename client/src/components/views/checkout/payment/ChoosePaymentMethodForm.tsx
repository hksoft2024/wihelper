"use client";

import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import RedeemOutlinedIcon from "@mui/icons-material/RedeemOutlined";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { SyntheticEvent, useState } from "react";
import PaypalIcon from "~/components/ui/icons/Paypal";
import { PaymentMethod } from "~/enums/PaymentMethod";

type Props = {};

const ChoosePaymentMethodForm = (props: Props) => {
	const t = useTranslations();

	const [expanded, setExpanded] = useState<PaymentMethod | false>(false);

	const handleChangePanel =
		(panel: PaymentMethod) => (_: SyntheticEvent, isExpanded: boolean) => {
			setExpanded(isExpanded ? panel : false);
		};

	return (
		<Card variant="outlined">
			<Accordion
				expanded={expanded === PaymentMethod.CreditCard}
				onChange={handleChangePanel(PaymentMethod.CreditCard)}
			>
				<AccordionSummary>
					<Typography>
						<CreditCardOutlinedIcon fontSize="small" />
						{t("PAY_WITH_METHOD", { method: t("CREDIT_CARD") })}
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography
						variant="body2"
						mb={4}
						display="flex"
						alignItems="center"
						gap={1}
					>
						{t("ACCEPTED_CREDIT_CARDS")}:
						<Image
							src="/images/app/cards.png"
							alt="wiHelper"
							width={187}
							height={28}
							style={{ width: 187 }}
							priority
						/>
					</Typography>
					<Box mb={4}>
						<Grid container columnSpacing={7.5} rowSpacing={4}>
							<Grid size={{ xs: 12, sm: 6 }}>
								<TextField placeholder={t("CARD_NUMBER")} />
							</Grid>
							<Grid size={{ xs: 12, sm: 6 }}>
								<TextField placeholder={t("FULL_NAME")} />
							</Grid>
							<Grid size={{ xs: 12, sm: 3 }}>
								<TextField placeholder="MM/YY" />
							</Grid>
							<Grid size={{ xs: 12, sm: 3 }}>
								<TextField placeholder="CVC" />
							</Grid>
							<Grid size={{ xs: 12, sm: 6 }}>
								<Button fullWidth size="large" variant="outlined">
									{t("SUBMIT")}
								</Button>
							</Grid>
						</Grid>
					</Box>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={expanded === PaymentMethod.PayPal}
				onChange={handleChangePanel(PaymentMethod.PayPal)}
			>
				<AccordionSummary>
					<Typography>
						<PaypalIcon fontSize="small" />
						{t("PAY_WITH_METHOD", { method: "PayPal" })}
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography variant="body2" mb={4} color="textSecondary">
						<strong>PayPal</strong> - {t("SAFE_AND_EASY_PAYMENT_MESSAGE")}
					</Typography>
					<Grid container columnSpacing={7.5} rowSpacing={4}>
						<Grid size={{ xs: 12, sm: 6 }}>
							<TextField placeholder={t("EMAIL")} />
						</Grid>
						<Grid size={{ xs: 12, sm: 6 }}>
							<TextField placeholder={t("PASSWORD")} />
						</Grid>
					</Grid>
					<Stack
						direction="row"
						alignItems="center"
						justifyContent="space-between"
						mt={4}
					>
						<Typography variant="body2" color="textSecondary">
							{t("FORGOT_PASSWORD")}?
						</Typography>
						<Button size="large">{t("LOG_IN")}</Button>
					</Stack>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={expanded === PaymentMethod.RedeemRewardPoints}
				onChange={handleChangePanel(PaymentMethod.RedeemRewardPoints)}
			>
				<AccordionSummary>
					<Typography>
						<RedeemOutlinedIcon fontSize="small" />
						{t("REDEEM_REWARD_POINTS")}
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography mb={4} color="textSecondary">
						{t.rich("REWARD_POINTS_AVAILABLE", {
							important: () => (
								<Typography
									component="span"
									color="textSecondary"
									fontWeight={500}
								>
									384
								</Typography>
							),
						})}
					</Typography>
					<FormControlLabel
						control={<Checkbox size="small" />}
						label={t("USE_REWARD_POINTS_FOR_PAYMENT")}
						slotProps={{
							typography: { variant: "body2", color: "textSecondary" },
						}}
					/>
				</AccordionDetails>
			</Accordion>
		</Card>
	);
};

export default ChoosePaymentMethodForm;
