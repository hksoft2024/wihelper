"use client";

import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Rating from "@mui/material/Rating";
import ratingClasses from "@mui/material/Rating/ratingClasses";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Badge from "~/@core/components/mui/Badge";
import ColorCheckbox from "~/components/ui/ColorCheckbox";
import { Link } from "~/i18n/routing";
import { Product } from "~/types/product";
import AddToCartButton from "./AddToCartButton";
import AddWishlistButton from "./AddWishlistButton";
import CompareButton from "./CompareButton";
import ProductSizeCheckbox from "./ProductSizeCheckbox";
import ProductSizeSelect from "./ProductSizeSelect";
import QuickViewButton from "./QuickViewButton";
import ProductCardFooter from "./styles/ProductCardFooter";
import ProductCardWrapper from "./styles/ProductCardWrapper";

type Props = {
	product: Product;
	showCompareAction?: boolean;
	disableHover?: boolean;
};

const ProductCard = ({ product, showCompareAction, disableHover }: Props) => {
	const [isHoveredProduct, setIsHoveredProduct] = useState(false);

	return (
		<ProductCardWrapper
			elevation={0}
			disableHover={disableHover}
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

				<AddWishlistButton />
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
						sx={{ ":hover": { color: "primary.main" } }}
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
				<ProductCardFooter disableSpacing>
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
				</ProductCardFooter>
			)}
		</ProductCardWrapper>
	);
};

export default ProductCard;
