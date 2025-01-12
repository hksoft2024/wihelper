"use client";

import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import buttonClasses from "@mui/material/Button/buttonClasses";
import Grid from "@mui/material/Grid2";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Rating from "@mui/material/Rating";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import svgIconClasses from "@mui/material/SvgIcon/svgIconClasses";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { useTranslations } from "next-intl";
import { CSSProperties, useMemo } from "react";
import Badge from "~/@core/components/mui/Badge";
import Button from "~/@core/components/mui/Button";
import ColorCheckbox from "~/components/ui/ColorCheckbox";
import FacebookIcon from "~/components/ui/icons/Facebook";
import { Product, ProductColor, ProductSize } from "~/types/product";
import ProductGallery from "../../shared/ProductGallery";
import ProductPanels from "./ProductPanels";
import SizeGuideButton from "./SizeGuideButton";

type Props = {
	viewType?: "detail" | "quick-view";
	product: Product;
};

const SocialShareButton = styled(Button)(({ theme }) => ({
	padding: theme.spacing(1, 2.5),
	backgroundColor: "rgb(var(--social-color) / 0.08)",
	color: "rgb(var(--social-color))",
	[`.${buttonClasses.startIcon} .${svgIconClasses.root}`]: {
		fontSize: 16,
	},
	":hover": {
		backgroundColor: "rgb(var(--social-color))",
		color: "#fff",
	},
}));

const ProductDetailSection = ({ viewType = "detail", product }: Props) => {
	const t = useTranslations();

	const [productColors, productSizes] = useMemo(() => {
		const colors: ProductColor[] = [];
		const sizes: ProductSize[] = [];

		product.variants?.forEach((variant) => {
			const hasColor = colors.some(
				(color) => color.code === variant.color.code
			);
			const hasSize = sizes.some((size) => size.name === variant.size.name);

			if (!hasColor) {
				colors.push(variant.color);
			}

			if (!hasSize) {
				sizes.push(variant.size);
			}
		});

		return [colors, sizes] as const;
	}, [product]);

	return (
		<Box px={{ lg: 4 }}>
			<Grid container spacing={4}>
				<Grid size={{ xs: 12, lg: 7 }}>
					<Box pt={viewType === "detail" ? { lg: 6 } : undefined}>
						{product.media_previews && product.media_previews.length > 0 ? (
							<ProductGallery mediaPreviews={product.media_previews} />
						) : (
							<Alert color="error" severity="error">
								{t("NO_MEDIA_PREVIEWS_AVAILABLE")}
							</Alert>
						)}
					</Box>
				</Grid>
				<Grid size={{ xs: 12, lg: 5 }}>
					<Box
						ml={viewType === "detail" ? { lg: "auto" } : 6}
						pt={1}
						pb={4}
						maxWidth={{ xs: 1, lg: 416 }}
					>
						{/* Rating & Reviews */}
						<Stack
							direction="row"
							alignItems="center"
							justifyContent="space-between"
							mb={2}
						>
							<Stack
								direction="row"
								alignItems="center"
								gap={1}
								flexWrap="wrap"
							>
								<Rating size="small" value={product.rating} readOnly />

								<Typography variant="body2" color="textSecondary" mt={1}>
									{t("REVIEWS_COUNT", {
										count: product.review_overview?.total,
									})}
								</Typography>
							</Stack>

							<Tooltip title={t("ADD_TO_WISHLIST")} placement="top">
								<IconButton
									size="large"
									sx={{
										bgcolor: "#f3f5f9",
										transition: (theme) => theme.transitions.create(["color"]),
										":hover": {
											color: "primary.main",
											bgcolor: "#f3f5f9",
										},
									}}
								>
									<FavoriteBorderOutlinedIcon fontSize="small" />
								</IconButton>
							</Tooltip>
						</Stack>

						{/* Price */}
						<Stack direction="row" alignItems="end" flexWrap="wrap" mb={4}>
							<Typography
								variant="h3"
								color="secondary"
								mr={1}
								fontWeight={400}
							>
								${product.current_price}
							</Typography>
							{product.current_price !== product.original_price && (
								<Typography
									variant="h4"
									color="textMuted"
									component="del"
									fontWeight={400}
									mr={4}
									lineHeight={1.5}
								>
									${product.original_price}
								</Typography>
							)}
							{product.current_price < product.original_price && (
								<Badge hasShadow color="error" variant="rounded" sx={{ mb: 2 }}>
									Sale
								</Badge>
							)}
						</Stack>

						{/* Color text */}
						<Stack direction="row" alignItems="center" mb={6}>
							<Typography
								variant="body2"
								mr={1}
								color="textPrimary"
								fontWeight={500}
							>
								{t("COLOR")}:
							</Typography>
							<Typography variant="body2" color="textMuted">
								{productColors.map((color) => color.name).join("/")}
							</Typography>
						</Stack>

						{/* Color options */}
						<Stack
							direction="row"
							alignItems="center"
							position="relative"
							mb={4}
							mr={{ xs: -6, lg: -10 }}
						>
							<Stack direction="row" alignItems="center">
								{productColors.map((color, index) => (
									<ColorCheckbox key={index} colorCode={color.code} />
								))}
							</Stack>

							<Stack
								direction="row"
								alignItems="center"
								gap={1}
								bgcolor="success.main"
								pl={2.5}
								pr={4}
								py={1.7}
								position="absolute"
								sx={(theme) => ({
									borderTopLeftRadius: 4,
									borderBottomLeftRadius: 4,
									top: "50%",
									right: theme.spacing(-2.3),
									transform: "translateY(-50%)",
									"::after": {
										content: '""',
										display: "block",
										position: "absolute",
										bottom: -8.5,
										right: 4,
										width: 0,
										height: 0,
										borderTop: 7,
										borderTopColor: "transparent",
										borderBottom: 7,
										borderBottomColor: "transparent",
										borderRight: 7,
										borderRightColor: "#29bc7d",
										transform: "rotate(45deg)",
									},
								})}
							>
								<VerifiedUserOutlinedIcon
									fontSize="small"
									sx={{ fill: "#fff" }}
								/>
								<Typography variant="body2" color="#fff">
									{t("PRODUCT_AVAILABLE")}
								</Typography>
							</Stack>
						</Stack>

						{/* Size & Quantity */}
						<Stack spacing={4} mb={7.5}>
							<Box>
								<Stack
									direction="row"
									alignItems="center"
									justifyContent="space-between"
									pb={1}
								>
									<Typography variant="body2" fontWeight={500} mb={1.5}>
										{t("SIZE")}:
									</Typography>

									{viewType === "detail" && <SizeGuideButton />}
								</Stack>

								<Select value="" displayEmpty fullWidth>
									<MenuItem value="">{t("SELECT_SIZE")}</MenuItem>
									{productSizes.map((size, index) => (
										<MenuItem key={index} value={size.id}>
											{size.name}
										</MenuItem>
									))}
								</Select>
							</Box>

							<Stack direction="row" alignItems="center" gap={4}>
								<Box flex={0.2}>
									<TextField
										type="number"
										defaultValue={1}
										slotProps={{ htmlInput: { min: 1 } }}
									/>
								</Box>

								<Box flex={0.8}>
									<Button
										size="large"
										fullWidth
										hasShadow
										startIcon={<ShoppingCartOutlinedIcon />}
										sx={{ py: 2.7 }}
									>
										{t("ADD_TO_CART")}
									</Button>
								</Box>
							</Stack>
						</Stack>

						{/* Panels & Sharing */}
						<Stack spacing={6}>
							{/* Panels */}
							{viewType === "detail" ? (
								<ProductPanels product={product} />
							) : (
								<Box>
									<Typography
										variant="h6"
										fontSize={18}
										display="flex"
										alignItems="center"
										gap={2}
										pb={2}
										mb={4}
										borderBottom={1}
										borderColor="divider"
									>
										<ErrorOutlineOutlinedIcon fontSize="small" color="action" />
										{t("PRODUCT_INFO")}
									</Typography>

									<Typography variant="body2">{product.description}</Typography>
								</Box>
							)}

							{/* Sharing */}
							{viewType === "detail" && (
								<Stack direction="row" alignItems="center">
									<Typography variant="body2" fontWeight={500} my={2} mr={4}>
										{t("SHARE")}:
									</Typography>

									<Stack
										direction="row"
										alignItems="center"
										gap={2}
										flexWrap="wrap"
									>
										<SocialShareButton
											startIcon={<TwitterIcon />}
											style={
												{ "--social-color": "29 161 242" } as CSSProperties
											}
										>
											Twitter
										</SocialShareButton>
										<SocialShareButton
											startIcon={<InstagramIcon />}
											style={{ "--social-color": "88 81 819" } as CSSProperties}
										>
											Instagram
										</SocialShareButton>
										<SocialShareButton
											startIcon={<FacebookIcon />}
											style={{ "--social-color": "59 89 152" } as CSSProperties}
										>
											Facebook
										</SocialShareButton>
									</Stack>
								</Stack>
							)}
						</Stack>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
};

export default ProductDetailSection;
