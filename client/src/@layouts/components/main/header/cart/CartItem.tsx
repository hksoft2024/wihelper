import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { Link } from "~/i18n/routing";
import { CartItem as TCartItem } from "~/types/cart";

type Props = {
	item: TCartItem;
};

const CartItem = ({ item }: Props) => {
	return (
		<ListItem
			disableGutters
			sx={{
				direction: "row",
				borderBottom: 1,
				borderColor: "divider",
				":hover": {
					"&  > .MuiIconButton-root": {
						opacity: 1,
					},
					"&  > .cart-item-detail": {
						transform: "translateX(0)",
					},
				},
			}}
		>
			<IconButton
				size="small"
				color="primary"
				sx={{
					opacity: 0,
					transition: (theme) => theme.transitions.create(["opacity"]),
				}}
			>
				<CloseIcon fontSize="small" />
			</IconButton>

			<Stack
				flex={1}
				direction="row"
				alignItems="center"
				gap={2}
				className="cart-item-detail"
				sx={{
					transform: "translate(-30px)",
					transition: (theme) => theme.transitions.create(["transform"]),
				}}
			>
				<Image
					src={item.product_image_url}
					alt={item.product_name}
					width={64}
					height={64}
					priority
				/>

				<Stack>
					<Typography
						component={Link}
						href="#"
						fontWeight={500}
						sx={{
							":hover": {
								color: "primary.main",
							},
						}}
					>
						{item.product_name}
					</Typography>

					<Typography>
						<Typography component="span" color="secondary" fontSize={14} mr={2}>
							{item.product_price}
						</Typography>
						<Typography component="span" fontSize={14} color="#7d879c">
							x {item.product_quantity}
						</Typography>
					</Typography>
				</Stack>
			</Stack>
		</ListItem>
	);
};

export default CartItem;
