import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Fragment } from "react";
import Banner from "~/components/views/home/banner";
import InfoCards from "~/components/views/home/InfoCards";
import PromotionBanner from "~/components/views/home/PromotionBanner";
import PurchaseProductsSection from "~/components/views/home/PurchaseProductsSection";

export const generateMetadata = async (): Promise<Metadata> => {
	const t = await getTranslations();

	return {
		title: t("HOME"),
	};
};

const HomePage = () => {
	return (
		<Fragment>
			<Banner />
			<PurchaseProductsSection />
			<PromotionBanner />
			<InfoCards />
		</Fragment>
	);
};

export default HomePage;
