"use client";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import cardActionsClasses from "@mui/material/CardActions/cardActionsClasses";
import CardContent from "@mui/material/CardContent";
import Fade from "@mui/material/Fade";
import IconButton from "@mui/material/IconButton";
import Rating from "@mui/material/Rating";
import ratingClasses from "@mui/material/Rating/ratingClasses";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";
import { useState } from "react";
import Badge from "~/@core/components/mui/Badge";
import ColorCheckbox from "~/components/ui/ColorCheckbox";
import { Link } from "~/i18n/routing";
import { Product } from "~/types/product";
import AddToCartButton from "./AddToCartButton";
import CompareButton from "./CompareButton";
import ProductSizeCheckbox from "./ProductSizeCheckbox";
import ProductSizeSelect from "./ProductSizeSelect";
import QuickViewButton from "./QuickViewButton";

type Props = {
	product: Product;
	showCompareAction?: boolean;
	disableHover?: boolean;
};

const ProductCard = ({ product, showCompareAction, disableHover }: Props) => {
	const t = useTranslations();

	const [isHoveredProduct, setIsHoveredProduct] = useState(false);

	return (
		<Card
			elevation={0}
			sx={{
				backgroundColor: "background.paper",
				position: "relative",
				overflow: "visible",
				borderRadius: 2,
				transition: (theme) =>
					theme.transitions.create(["box-shadow", "border-radius"]),
				...(!disableHover
					? {
							":hover": {
								boxShadow: 1,
								borderBottomLeftRadius: 0,
								borderBottomRightRadius: 0,
								[`.${cardActionsClasses.root}`]: {
									boxShadow: 1,
									opacity: 1,
									pointerEvents: "auto",
								},
								".compare-btn": {
									opacity: 1,
									pointerEvents: "auto",
								},
							},
					  }
					: {}),
			}}
			onMouseEnter={() => setIsHoveredProduct(true)}
			onMouseLeave={() => setIsHoveredProduct(false)}
		>
			{!!product.badge && (
				<Badge
					size="small"
					variant="rounded"
					color={product.badge_color}
					hasShadow
					sx={{
						position: "absolute",
						top: 12,
						left: 12,
					}}
				>
					{product.badge}
				</Badge>
			)}

			<Stack
				direction="row"
				alignItems="center"
				gap={2}
				position="absolute"
				top={12}
				right={12}
			>
				{showCompareAction && <CompareButton product={product} />}

				<Tooltip
					title={t("ADD_TO_WISHLIST")}
					placement="left"
					TransitionComponent={Fade}
				>
					<IconButton
						sx={{
							bgcolor: "#f3f5f9",
							":hover": { bgcolor: "#f3f5f9", color: "primary.main" },
						}}
					>
						<FavoriteBorderOutlinedIcon sx={{ fontSize: 16 }} />
					</IconButton>
				</Tooltip>
			</Stack>

			<Box
				display="flex"
				borderRadius="inherit"
				overflow="hidden"
				component={Link}
				href="/products/1"
			>
				<img src={product.thumbnail_url} alt="" />
			</Box>

			<CardContent sx={{ px: 5, py: 2 }}>
				<Stack>
					<Typography gutterBottom variant="caption">
						{product.category_name}
					</Typography>
					<Typography
						variant="h3"
						mb={3}
						fontSize={14}
						component={Link}
						href="/products/1"
						sx={{
							":hover": { color: "primary.main" },
						}}
					>
						{product.name}
					</Typography>
				</Stack>
				<Stack
					direction="row"
					alignItems="center"
					justifyContent="space-between"
				>
					<Typography color="secondary">{product.original_price}</Typography>

					<Rating
						size="small"
						value={product.rating}
						readOnly
						sx={{
							[`.${ratingClasses.icon}`]: {
								fontSize: 14,
							},
						}}
					/>
				</Stack>
			</CardContent>

			{!disableHover && (
				<CardActions
					disableSpacing
					sx={{
						flexDirection: "column",
						alignItems: "center",
						gap: 2,
						p: 5,
						pt: 0,
						position: "absolute",
						top: "100%",
						zIndex: 1,
						width: 1,
						bgcolor: "background.paper",
						boxShadow: "none",
						opacity: 0,
						pointerEvents: "none",
						borderBottomLeftRadius: 8,
						borderBottomRightRadius: 8,
						transition: (theme) =>
							theme.transitions.create(["opacity", "box-shadow"]),
					}}
				>
					{!!product.colors && (
						<Stack
							width={1}
							direction="row"
							alignItems="center"
							justifyContent="center"
						>
							{product.colors.map((color, index) => (
								<ColorCheckbox key={index} colorCode={color} />
							))}
						</Stack>
					)}

					{!!product.sizes && !product.colors && (
						<Stack
							width={1}
							direction="row"
							alignItems="center"
							justifyContent="center"
						>
							{product.sizes.map((size, index) => (
								<ProductSizeCheckbox key={index} label={size} />
							))}
						</Stack>
					)}

					<Stack width={1} direction="row" alignItems="center" gap={2}>
						{!!product.sizes && !!product.colors && (
							<Box flex={0.7}>
								<ProductSizeSelect
									options={product.sizes}
									value={product.sizes[0]}
									onChange={(value) => console.log(value)}
									isHoveredParent={isHoveredProduct}
								/>
							</Box>
						)}

						<AddToCartButton product={product} />
					</Stack>
					<Box width={1} textAlign="center">
						<QuickViewButton product={product} />
					</Box>
				</CardActions>
			)}
		</Card>
	);
};

export default ProductCard;
