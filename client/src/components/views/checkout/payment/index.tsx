import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { getTranslations } from "next-intl/server";
import ChoosePaymentMethodForm from "./ChoosePaymentMethodForm";

type Props = {};

const PaymentMethods = async (props: Props) => {
	const t = await getTranslations();

	return (
		<Stack spacing={6} mb={2}>
			<Typography component="h2" variant="h6">
				{t("CHOOSE_SHIPPING_METHOD")}
			</Typography>
			<ChoosePaymentMethodForm />
		</Stack>
	);
};

export default PaymentMethods;
