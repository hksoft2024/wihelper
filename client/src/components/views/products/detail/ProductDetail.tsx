"use client";

import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import Box from "@mui/material/Box";
import buttonClasses from "@mui/material/Button/buttonClasses";
import Grid from "@mui/material/Grid2";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Rating from "@mui/material/Rating";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import svgIconClasses from "@mui/material/SvgIcon/svgIconClasses";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";
import { useTranslations } from "next-intl";
import Badge from "~/@core/components/mui/Badge";
import Button from "~/@core/components/mui/Button";
import ColorCheckbox from "~/components/ui/ColorCheckbox";
import FacebookIcon from "~/components/ui/icons/Facebook";
import ProductGallery from "../shared/ProductGallery";
import ProductPanels from "./ProductPanels";
import SizeGuideButton from "./SizeGuideButton";

type Props = {
	viewType?: "detail" | "quick-view";
};

const ProductDetail = ({ viewType = "detail" }: Props) => {
	const t = useTranslations();

	return (
		<Box px={{ lg: 4 }}>
			<Grid container spacing={4}>
				<Grid size={{ xs: 12, lg: 7 }}>
					<Box pt={viewType === "detail" ? { lg: 6 } : undefined}>
						<ProductGallery />
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
								<Rating size="small" value={4} readOnly />

								<Typography variant="body2" color="textSecondary" mt={1}>
									{t("REVIEWS_COUNT", { count: 74 })}
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
								$18.99
							</Typography>
							<Typography
								variant="h4"
								color="textMuted"
								component="del"
								fontWeight={400}
								mr={4}
								lineHeight={1.5}
							>
								$25.00
							</Typography>
							<Badge
								hasShadow
								color="error"
								variant="rounded"
								size="small"
								sx={{ mb: 2 }}
							>
								Sale
							</Badge>
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
								Red/Dark blue/White
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
								<ColorCheckbox colorCode="black" />
								<ColorCheckbox colorCode="red" />
								<ColorCheckbox colorCode="blue" />
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
									Product available
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

								<Select
									value=""
									displayEmpty
									fullWidth
									MenuProps={{ disableAutoFocusItem: true }}
								>
									<MenuItem value="">Select size</MenuItem>
									<MenuItem value="XS">XS</MenuItem>
									<MenuItem value="S">S</MenuItem>
									<MenuItem value="M">M</MenuItem>
								</Select>
							</Box>

							<Stack direction="row" alignItems="center" gap={4}>
								<Box flex={0.2}>
									<Select
										value="1"
										displayEmpty
										fullWidth
										MenuProps={{ disableAutoFocusItem: true }}
									>
										<MenuItem value="1">1</MenuItem>
										<MenuItem value="2">2</MenuItem>
										<MenuItem value="2">2</MenuItem>
										<MenuItem value="3">M</MenuItem>
									</Select>
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
								<ProductPanels />
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
										Product info
									</Typography>

									<Typography variant="body2">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Animi possimus nulla hic architecto, incidunt laudantium
										nesciunt sapiente beatae! Eveniet eum laboriosam soluta
										beatae ad? Suscipit odit deleniti earum totam distinctio!
									</Typography>
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
										<Button
											startIcon={<TwitterIcon />}
											sx={{
												py: 1,
												px: 2.5,
												bgcolor: alpha("#1da1f2", 0.08),
												color: "#1da1f2",
												[`.${buttonClasses.startIcon} .${svgIconClasses.root}`]:
													{
														fontSize: 16,
													},
												":hover": {
													bgcolor: "#1da1f2",
													color: "#fff",
												},
											}}
										>
											Twitter
										</Button>
										<Button
											startIcon={<InstagramIcon />}
											sx={{
												py: 1,
												px: 2.5,
												bgcolor: alpha("#5851db", 0.08),
												color: "#5851db",
												[`.${buttonClasses.startIcon} .${svgIconClasses.root}`]:
													{
														fontSize: 16,
													},
												":hover": {
													bgcolor: "#5851db",
													color: "#fff",
												},
											}}
										>
											Instagram
										</Button>
										<Button
											startIcon={<FacebookIcon />}
											sx={{
												py: 1,
												px: 2.5,
												bgcolor: alpha("#3b5998", 0.08),
												color: "#3b5998",
												[`.${buttonClasses.startIcon} .${svgIconClasses.root}`]:
													{
														fontSize: 16,
													},
												":hover": {
													bgcolor: "#3b5998",
													color: "#fff",
												},
											}}
										>
											Facebook
										</Button>
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

export default ProductDetail;
