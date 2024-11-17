import { useTranslations } from "next-intl";
import { ReactNode } from "react";
import { routing } from "~/i18n/routing";

export type ChildrenType = {
	children: ReactNode;
};

export type Locale = (typeof routing.locales)[number];

export type LocaleParam = {
	locale: Locale;
};

export type Translation = ReturnType<typeof useTranslations>;
