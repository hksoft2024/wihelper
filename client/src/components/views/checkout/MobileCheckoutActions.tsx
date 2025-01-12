"use client";

import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "nextjs-toploader/app";
import { useMemo } from "react";
import { CheckoutStep } from "~/enums/CheckoutStep";

type Props = {
	currentStep: CheckoutStep;
};

const MobileCheckoutActions = ({ currentStep }: Props) => {
	const t = useTranslations();
	const router = useRouter();
	const locale = useLocale();

	const isDownSmScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

	const [backButtonLabel, continueButtonLabel] = useMemo(() => {
		let backButtonLabel = "";
		let continueButtonLabel = "";

		if (isDownSmScreen) {
			backButtonLabel = t("BACK");
			continueButtonLabel = t("NEXT");
		} else {
			switch (currentStep) {
				case CheckoutStep.Details:
					backButtonLabel = t("BACK_TO_CART");
					continueButtonLabel = t("PROCEED_TO_SHIPPING");
					break;
				case CheckoutStep.Shipping:
					backButtonLabel = t("BACK_TO_ADDRESSES");
					continueButtonLabel = t("PROCEED_TO_PAYMENT");
					break;
				case CheckoutStep.Payment:
					backButtonLabel = t("BACK_TO_SHiPPING");
					continueButtonLabel = t("REVIEW_YOUR_ORDER");
					break;
				case CheckoutStep.Review:
					backButtonLabel = t("BACK_TO_PAYMENT");
					continueButtonLabel = t("COMPLETE_ORDER");
					break;
				default:
					break;
			}
		}

		return [backButtonLabel, continueButtonLabel] as const;
	}, [currentStep, isDownSmScreen]);

	const handleContinue = () => {
		if (currentStep === CheckoutStep.Review) {
			router.push(`/${locale}/checkout/complete`);
		} else {
			router.push(`/${locale}/checkout?step=${currentStep + 1}`);
		}
	};

	const handleBack = () => {
		if (currentStep === CheckoutStep.Details) {
			router.push(`/${locale}/cart`);
		} else {
			router.push(`/${locale}/checkout?step=${currentStep - 1}`);
		}
	};

	return (
		<Box mt={10} display={{ xs: "block", lg: "none" }}>
			<Grid container spacing={6}>
				<Grid size={{ xs: 6 }}>
					<Button
						fullWidth
						size="large"
						startIcon={<KeyboardArrowLeftOutlinedIcon />}
						sx={{
							bgcolor: "#f3f5f9",
							color: "text.primary",
							":hover": {
								bgcolor: "#d8deeb",
							},
						}}
						onClick={handleBack}
					>
						{backButtonLabel}
					</Button>
				</Grid>
				<Grid size={{ xs: 6 }}>
					<Button
						fullWidth
						size="large"
						endIcon={<KeyboardArrowRightOutlinedIcon />}
						onClick={handleContinue}
					>
						{continueButtonLabel}
					</Button>
				</Grid>
			</Grid>
		</Box>
	);
};

export default MobileCheckoutActions;
