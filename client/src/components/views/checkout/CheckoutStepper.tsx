"use client";

import Box from "@mui/material/Box";
import MuiStep from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import stepConnectorClasses from "@mui/material/StepConnector/stepConnectorClasses";
import stepIconClasses from "@mui/material/StepIcon/stepIconClasses";
import StepLabel from "@mui/material/StepLabel";
import stepLabelClasses from "@mui/material/StepLabel/stepLabelClasses";
import Stepper from "@mui/material/Stepper";
import { alpha, styled } from "@mui/material/styles";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "nextjs-toploader/app";
import { CHECKOUT_STEPS } from "~/constants/checkout";
import { CheckoutStep } from "~/enums/CheckoutStep";

type Props = {
	currentStep: CheckoutStep;
};

type StyledStepLabelProps = {
	isCurrentStep: boolean;
};

const StyledStep = styled(MuiStep)(({ theme }) => ({
	[`.${stepConnectorClasses.line}`]: {
		borderWidth: 4,
		borderRadius: 99,
	},
	[`.${stepConnectorClasses.active} .${stepConnectorClasses.line}`]: {
		borderColor: theme.palette.primary.main,
	},
}));

const StyledStepLabel = styled(StepLabel, {
	shouldForwardProp: (prop) => prop !== "isCurrentStep",
})<StyledStepLabelProps>(({ theme, isCurrentStep }) => ({
	color: alpha("#fff", 0.55),
	":hover": {
		color: alpha("#fff", 0.8),
	},
	[`.${stepLabelClasses.labelContainer}`]: {
		color: "inherit",
		[`.${stepLabelClasses.label}`]: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			gap: theme.spacing(1.5),
			color: "inherit",
			fontSize: 16,
			"&.Mui-active": {
				color: isCurrentStep ? "#fff" : "inherit",
				fontWeight: 400,
			},
		},
	},
	[`.${stepIconClasses.root}`]: {
		color: "#485268",
		fontSize: 26,
		"&.Mui-active": {
			color: theme.palette.primary.main,
		},
		[`.${stepIconClasses.text}`]: {
			fontSize: 14,
			fontFamily: "inherit",
		},
	},
}));

const CheckoutStepper = ({ currentStep }: Props) => {
	const t = useTranslations();
	const locale = useLocale();
	const router = useRouter();

	const handleClickStep = (step: CheckoutStep) => {
		if (step === CheckoutStep.Cart) {
			router.push(`/${locale}/cart`);
		} else {
			router.push(`/${locale}/checkout?step=${step}`);
		}
	};

	return (
		<Box pb={4} mb={12}>
			<Stepper alternativeLabel nonLinear activeStep={currentStep}>
				{CHECKOUT_STEPS.map((step) => (
					<StyledStep key={step.id} active={currentStep >= step.id}>
						<StepButton
							disabled={currentStep <= step.id}
							onClick={() => handleClickStep(step.id)}
						>
							<StyledStepLabel isCurrentStep={currentStep === step.id}>
								{step.icon}
								{t(step.label)}
							</StyledStepLabel>
						</StepButton>
					</StyledStep>
				))}
			</Stepper>
		</Box>
	);
};

export default CheckoutStepper;
