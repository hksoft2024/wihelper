"use client";

import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Rating from "@mui/material/Rating";
import ratingClasses from "@mui/material/Rating/ratingClasses";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useMemo, useState } from "react";
import Badge from "~/@core/components/mui/Badge";
import ColorCheckbox from "~/components/ui/ColorCheckbox";
import { Link } from "~/i18n/routing";
import { Product, ProductColor, ProductSize } from "~/types/product";
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

	const productColors = useMemo(() => {
		const colors: ProductColor[] = [];

		product.variants?.forEach((variant) => {
			const hasColor = colors.some(
				(color) => color.code === variant.color.code
			);

			if (!hasColor) {
				colors.push(variant.color);
			}
		});

		return colors;
	}, []);

	const productSizes = useMemo(() => {
		const sizes: ProductSize[] = [];

		product.variants?.forEach((variant) => {
			const hasSize = sizes.some((size) => size.name === variant.size.name);

			if (!hasSize) {
				sizes.push(variant.size);
			}
		});

		return sizes;
	}, []);

	return (
		<ProductCardWrapper
			elevation={0}
			disableHover={disableHover}
			onMouseEnter={() => setIsHoveredProduct(true)}
			onMouseLeave={() => setIsHoveredProduct(false)}
		>
			{product.badge && (
				<Badge
					size="small"
					variant="rounded"
					color={product.badge_color ?? "default"}
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
				href={`/products/${product.id}`}
			>
				<img src={product.thumbnail_url} alt="" />
			</Box>

			<CardContent sx={{ px: 5, py: 2 }}>
				<Stack>
					<Typography
						gutterBottom
						variant="caption"
						color="textMuted"
						sx={{ ":hover": { color: "text.secondary" } }}
					>
						{product.category.name}
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
					<Typography color="secondary">
						${product.current_price}{" "}
						{product.original_price > 0 && (
							<Typography component="del" variant="body2" color="textMuted">
								{product.original_price}
							</Typography>
						)}
					</Typography>

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
					{!!productColors.length && (
						<Stack
							width={1}
							direction="row"
							alignItems="center"
							justifyContent="center"
						>
							{productColors.map((color, index) => (
								<ColorCheckbox key={index} colorCode={color.code} />
							))}
						</Stack>
					)}

					{!!productSizes.length && !productColors.length && (
						<Stack
							width={1}
							direction="row"
							alignItems="center"
							justifyContent="center"
						>
							{productSizes.map((size, index) => (
								<ProductSizeCheckbox key={index} label={size.name} />
							))}
						</Stack>
					)}

					<Stack width={1} direction="row" alignItems="center" gap={2}>
						{!!productSizes.length && !!productColors.length && (
							<Box flex={0.7}>
								<ProductSizeSelect
									options={productSizes}
									value={productSizes[0].id}
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
