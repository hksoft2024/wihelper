import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { getTranslations } from "next-intl/server";
import ShippingMethodsTable from "./ShippingMethodsTable";

type Props = {};

const ShippingMethods = async (props: Props) => {
	const t = await getTranslations();

	return (
		<Stack spacing={6} mb={4}>
			<Typography component="h2" variant="h6">
				{t("CHOOSE_SHIPPING_METHOD")}
			</Typography>
			<ShippingMethodsTable />
		</Stack>
	);
};

export default ShippingMethods;
