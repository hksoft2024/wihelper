import Grid from "@mui/material/Grid2";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { z } from "zod";
import { LocaleParam } from "~/@core/types";
import NegativeMarginContentWrapper from "~/@layouts/shared/NegativeMarginContentWrapper";
import CheckoutStepper from "~/components/views/checkout/CheckoutStepper";
import DesktopCheckoutActions from "~/components/views/checkout/DesktopCheckoutActions";
import CustomerDetails from "~/components/views/checkout/details";
import MobileCheckoutActions from "~/components/views/checkout/MobileCheckoutActions";
import OrderSummary from "~/components/views/checkout/OrderSummary";
import PaymentMethods from "~/components/views/checkout/payment";
import ReviewOrder from "~/components/views/checkout/review";
import ShippingMethods from "~/components/views/checkout/shipping";
import { CheckoutStep } from "~/enums/CheckoutStep";
import { redirect } from "~/i18n/routing";

type Params = LocaleParam;

type SearchParams = {
	step?: string;
};

type Props = {
	searchParams: Promise<SearchParams>;
	params: Promise<Params>;
};

export const generateMetadata = async (): Promise<Metadata> => {
	const t = await getTranslations();

	return {
		title: t("CHECKOUT"),
	};
};

const CheckoutPage = async ({ searchParams, params }: Props) => {
	const [t, { locale }, { step }] = await Promise.all([
		getTranslations(),
		params,
		searchParams,
	]);

	const currentStep = Number(step ?? CheckoutStep.Details);
	const stepSchema = z.nativeEnum(CheckoutStep);
	const parsedStep = await stepSchema.safeParseAsync(currentStep);

	if (!parsedStep.success) {
		notFound();
	}

	if (currentStep === CheckoutStep.Cart) {
		redirect({ href: "/cart", locale });
	}

	return (
		<NegativeMarginContentWrapper
			title={t("CHECKOUT")}
			breadcrumbs={[
				{ label: t("SHOP"), href: "/products" },
				{ label: t("CHECKOUT") },
			]}
		>
			<Grid container spacing={{ xs: 6, lg: 7.5, xl: 16 }}>
				<Grid size={{ xs: 12, lg: 8 }}>
					<CheckoutStepper currentStep={parsedStep.data} />

					{currentStep === CheckoutStep.Details && <CustomerDetails />}
					{currentStep === CheckoutStep.Shipping && <ShippingMethods />}
					{currentStep === CheckoutStep.Payment && <PaymentMethods />}
					{currentStep === CheckoutStep.Review && <ReviewOrder />}

					<DesktopCheckoutActions currentStep={parsedStep.data} />
				</Grid>
				<Grid size={{ xs: 12, lg: 4 }}>
					<OrderSummary currentStep={parsedStep.data} />
				</Grid>
			</Grid>

			<MobileCheckoutActions currentStep={parsedStep.data} />
		</NegativeMarginContentWrapper>
	);
};

export default CheckoutPage;
