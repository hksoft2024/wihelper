import { CheckoutStep } from "~/enums/CheckoutStep";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export const CHECKOUT_STEPS = [
	{
		id: CheckoutStep.Cart,
		label: "CART",
		icon: <ShoppingCartOutlinedIcon fontSize="small" />,
	},
	{
		id: CheckoutStep.Details,
		label: "DETAILS",
		icon: <AccountCircleOutlinedIcon fontSize="small" />,
	},
	{
		id: CheckoutStep.Shipping,
		label: "SHIPPING",
		icon: <LocalShippingOutlinedIcon fontSize="small" />,
	},
	{
		id: CheckoutStep.Payment,
		label: "PAYMENT",
		icon: <PaymentOutlinedIcon fontSize="small" />,
	},
	{
		id: CheckoutStep.Review,
		label: "REVIEW",
		icon: <CheckCircleOutlinedIcon fontSize="small" />,
	},
];
