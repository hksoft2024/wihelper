import Stack from "@mui/material/Stack";
import CustomerAddresses from "./CustomerAddresses";
import CustomerInfo from "./CustomerInfo";

type Props = {};

const CustomerDetails = (props: Props) => {
	return (
		<Stack spacing={7.5}>
			<CustomerInfo />
			<CustomerAddresses />
		</Stack>
	);
};

export default CustomerDetails;
