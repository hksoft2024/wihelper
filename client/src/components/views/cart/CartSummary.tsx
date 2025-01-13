"use client";

import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Card from "@mui/material/Card";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";
import { SyntheticEvent, useState } from "react";
import Badge from "~/@core/components/mui/Badge";
import Button from "~/@core/components/mui/Button";
import { Link } from "~/i18n/routing";

type Props = {};

enum Panel {
	PROMOTION,
	INSURANCE,
}

const CartSummary = (props: Props) => {
	const t = useTranslations();

	const [expanded, setExpanded] = useState<Panel | false>(false);

	const handleChangePanel =
		(panel: Panel) => (_: SyntheticEvent, isExpanded: boolean) => {
			setExpanded(isExpanded ? panel : false);
		};

	return (
		<Card sx={{ p: 6 }}>
			<Stack px={{ xl: 2 }} py={2} spacing={6}>
				<Stack pb={4} borderBottom={1} borderColor="divider">
					<Typography
						component="h2"
						variant="h5"
						pb={1}
						mb={4}
						textAlign="center"
					>
						{t("SUBTOTAL")}
					</Typography>
					<Typography variant="h3" textAlign="center" mb={3} fontWeight={400}>
						$265.00
					</Typography>
				</Stack>
				<Stack spacing={4}>
					<Stack direction="row" alignItems="center" gap={2}>
						<Badge variant="rounded" color="info">
							{t("NOTE")}
						</Badge>
						<Typography variant="body2" fontWeight={500}>
							{t("ADDITIONAL_COMMENTS")}
						</Typography>
					</Stack>
					<TextField multiline rows={5} />
				</Stack>
				<Card variant="outlined">
					<Accordion
						expanded={expanded === Panel.PROMOTION}
						onChange={handleChangePanel(Panel.PROMOTION)}
					>
						<AccordionSummary>
							<Typography>{t("PRODUCT_INFO")}</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Stack spacing={4}>
								<TextField placeholder={t("PROMO_CODE")} />
								<Button variant="outlined" size="large">
									{t("APPLY_PROMO_CODE")}
								</Button>
							</Stack>
						</AccordionDetails>
					</Accordion>
					<Accordion
						expanded={expanded === Panel.INSURANCE}
						onChange={handleChangePanel(Panel.INSURANCE)}
					>
						<AccordionSummary>
							<Typography>{t("QUALIFYING_FOR_INSURANCE")}?</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Select value="" fullWidth displayEmpty>
								<MenuItem value="">{t("WANT_PURCHASE_VIA_INSURANCE")}</MenuItem>
								<MenuItem value="Yes">{t("YES")}</MenuItem>
								<MenuItem value="No">{t("NO")}</MenuItem>
							</Select>
						</AccordionDetails>
					</Accordion>
				</Card>
				<Button
					LinkComponent={Link}
					href="/checkout"
					hasShadow
					size="large"
					startIcon={<PaymentOutlinedIcon />}
				>
					{t("PROCEED_TO_CHECKOUT")}
				</Button>
			</Stack>
		</Card>
	);
};

export default CartSummary;
