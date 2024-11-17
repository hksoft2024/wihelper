import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { ChildrenType, LocaleParam } from "~/@core/types";
import MainLayout from "~/@layouts/MainLayout";
import { hasLocale } from "~/i18n/request";

type Props = ChildrenType & {
	params: LocaleParam;
};

const LocaleLayout = async ({ children, params: { locale } }: Props) => {
	if (!hasLocale(locale)) {
		notFound();
	}

	const messages = await getMessages();

	return (
		<NextIntlClientProvider messages={messages}>
			<MainLayout>{children}</MainLayout>
		</NextIntlClientProvider>
	);
};

export default LocaleLayout;
