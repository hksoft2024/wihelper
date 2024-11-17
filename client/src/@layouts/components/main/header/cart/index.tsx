import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import Stack from "@mui/material/Stack";
import zIndex from "@mui/material/styles/zIndex";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";
import { MouseEvent, useState } from "react";
import { CART_ITEMS } from "~/fake-data/cart";
import CartItem from "./CartItem";

const Cart = () => {
	const t = useTranslations();

	const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

	const handleShowCart = (e: MouseEvent<HTMLElement>) => {
		setAnchorEl(e.currentTarget);
	};

	const handleHideCart = () => {
		setAnchorEl(null);
	};

	return (
		<Stack
			direction="row"
			alignItems="center"
			gap={2.5}
			ml={6}
			sx={{ cursor: "pointer" }}
			onMouseEnter={handleShowCart}
			onMouseLeave={handleHideCart}
		>
			<Badge
				badgeContent={4}
				color="primary"
				sx={{
					"& .MuiBadge-anchorOriginTopRight": {
						top: 3,
						right: 6,
					},
				}}
			>
				<IconButton
					size="large"
					sx={{
						bgcolor: "#f3f5f9",
						p: 3.25,
						":hover": {
							bgcolor: "#f3f5f9",
						},
					}}
				>
					<ShoppingCartOutlinedIcon color="action" fontSize="small" />
				</IconButton>
			</Badge>

			<Stack display={{ xs: "none", lg: "flex" }}>
				<Typography variant="caption" sx={{ color: "#7d879c" }}>
					{t("MY_CART")}
				</Typography>
				<Typography
					variant="body2"
					color="textPrimary"
					display="flex"
					alignItems="center"
				>
					$1,266.00
					<ArrowDropDownIcon
						fontSize="small"
						sx={{ transform: "translateY(-2px)" }}
					/>
				</Typography>
			</Stack>

			<Popper
				open={!!anchorEl}
				anchorEl={anchorEl}
				transition
				placement="bottom-end"
				sx={{
					zIndex: zIndex.tooltip,
				}}
			>
				{({ TransitionProps }) => (
					<Fade {...TransitionProps}>
						<Paper
							elevation={1}
							sx={{
								mt: 2,
								p: 4,
								pb: 6,
								animation: "slide-up 250ms ease-in-out",
							}}
						>
							<List
								disablePadding
								sx={{
									height: "15rem",
									width: "20rem",
									maxWidth: "20rem",
									overflow: "auto",
									pr: 4,
									"::-webkit-scrollbar": {
										width: 3,
										height: 3,
										bgcolor: "white",
										opacity: 0,
									},
									"::-webkit-scrollbar-track": {
										borderRadius: 1,
										bgcolor: "#e9edf4",
									},
									"::-webkit-scrollbar-thumb": {
										borderRadius: 1,
										bgcolor: "#aeb4be",
									},
								}}
							>
								{CART_ITEMS.map((cartItem, index) => (
									<CartItem key={index} item={cartItem} />
								))}
							</List>

							<Stack
								direction="row"
								alignItems="center"
								justifyContent="space-between"
								py={4}
							>
								<Typography color="textMuted" variant="body2">
									{t("SUBTOTAL")}:{" "}
									<Typography component="span" color="secondary">
										$1,266.00
									</Typography>
								</Typography>

								<Button
									variant="outlined"
									sx={{
										borderColor: "#dae1e7",
										color: "#2b3445",
										fontWeight: 400,
										":hover": {
											borderColor: "#dae1e7",
											color: "#373f50",
											bgcolor: "#f3f5f9",
										},
									}}
									endIcon={<KeyboardArrowRightIcon />}
								>
									{t("EXPAND_CART")}
								</Button>
							</Stack>

							<Button fullWidth startIcon={<PaymentOutlinedIcon />}>
								{t("CHECKOUT")}
							</Button>
						</Paper>
					</Fade>
				)}
			</Popper>
		</Stack>
	);
};

export default Cart;
