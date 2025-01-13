import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Fragment } from "react";
import { LocaleParam } from "~/@core/types";
import Banner from "~/components/views/home/banner";
import InfoCards from "~/components/views/home/InfoCards";
import PromotionProductsSection from "~/components/views/home/promotion-products";
import PurchaseProductsSection from "~/components/views/home/purchase-products";

type Props = {
	params: Promise<LocaleParam>;
};

export const generateMetadata = async (): Promise<Metadata> => {
	const t = await getTranslations();

	return {
		title: t("HOME"),
	};
};

const HomePage = async ({ params }: Props) => {
	const { locale } = await params;

	return (
		<Fragment>
			<Banner />
			<PurchaseProductsSection locale={locale} />
			<PromotionProductsSection />
			<InfoCards />
		</Fragment>
	);
};

export default HomePage;
