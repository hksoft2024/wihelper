import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Button from "@mui/material/Button";
import buttonClasses from "@mui/material/Button/buttonClasses";
import svgIconClasses from "@mui/material/SvgIcon/svgIconClasses";
import { useTranslations } from "next-intl";
import { Product } from "~/types/product";

type Props = {
	product: Product;
};

const AddToCartButton = ({ product }: Props) => {
	const t = useTranslations();

	const handleAddToCart = () => {
		console.log("ADD TO CART >>>", product);
	};

	return (
		<Button
			fullWidth
			startIcon={<ShoppingCartOutlinedIcon />}
			sx={{
				flex: 1,
				[`.${buttonClasses.startIcon} > .${svgIconClasses.root}`]: {
					fontSize: 16,
				},
			}}
			onClick={handleAddToCart}
		>
			{t("ADD_TO_CART")}
		</Button>
	);
};

export default AddToCartButton;
