import { getRequestConfig } from "next-intl/server";
import { Locale } from "~/@core/types";
import { routing } from "./routing";

export const hasLocale = (locale: Locale) => {
	return !!locale && routing.locales.includes(locale);
};

export default getRequestConfig(async ({ requestLocale }) => {
	let locale = await requestLocale;

	if (hasLocale(locale as Locale)) {
		locale = routing.defaultLocale;
	}

	return {
		locale,
		messages: (await import(`../lang/${locale}.json`)).default,
	};
});
