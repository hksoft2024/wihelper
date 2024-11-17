"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { Link } from "~/i18n/routing";
import { Product } from "~/types/product";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";
import { alpha } from "@mui/material/styles";
import SyncOutlinedIcon from "@mui/icons-material/SyncOutlined";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Fade from "@mui/material/Fade";

type Props = {
	product: Product;
};

const ProductCard = ({ product }: Props) => {
	return (
		<Card
			elevation={0}
			sx={{
				backgroundColor: "background.paper",
				position: "relative",
				overflow: "visible",
				":hover": {
					boxShadow: 1,
					"& .MuiCardActions-root": {
						boxShadow: 1,
						opacity: 1,
						pointerEvents: "auto",
					},
					"& .compare-btn": {
						opacity: 1,
						pointerEvents: "auto",
					},
				},
			}}
		>
			<Badge
				variant="rounded"
				color={product.badge_color}
				sx={{
					position: "absolute",
					top: 12,
					left: 12,
					boxShadow: (theme) => {
						switch (product.badge_color) {
							case "primary":
								return `${alpha(
									theme.palette.primary.main,
									0.9
								)} 0px 0.5rem 1.125rem -0.275rem;`;
							case "error":
								return `${alpha(
									theme.palette.error.main,
									0.9
								)} 0px 0.5rem 1.125rem -0.275rem;`;
							case "info":
								return `${alpha(
									theme.palette.info.main,
									0.9
								)} 0px 0.5rem 1.125rem -0.275rem;`;
							default:
								break;
						}
					},
				}}
			>
				{product.badge}
			</Badge>

			<Stack
				direction="row"
				alignItems="center"
				gap={2}
				position="absolute"
				top={12}
				right={12}
			>
				<Box
					component={Link}
					href={product.href}
					p={2}
					display="flex"
					alignItems="center"
					gap={1}
					className="compare-btn"
					sx={{
						":hover": {
							"& > .MuiSvgIcon-root": {
								fill: (theme) => theme.palette.primary.main,
							},
							"& > .MuiTypography-root": {
								color: "primary.main",
							},
						},
						opacity: 0,
						pointerEvents: "none",
						transition: (theme) => theme.transitions.create(["opacity"]),
					}}
				>
					<SyncOutlinedIcon
						sx={{
							transform: "rotate(130deg)",
							fontSize: 16,
							color: "text.secondary",
							transition: (theme) => theme.transitions.create(["fill"]),
						}}
					/>
					<Typography variant="body2" color="textSecondary">
						Compare
					</Typography>
				</Box>

				<Tooltip
					title="Add to wishlist"
					placement="left"
					disableInteractive
					arrow
					TransitionComponent={Fade}
					slotProps={{
						popper: {
							sx: {
								"& .MuiTooltip-tooltip": {
									bgcolor: "#2b3445",
									color: alpha("#fff", 0.9),
									fontSize: 12,
								},
								"&[data-popper-placement*='left'] .MuiTooltip-tooltip.MuiTooltip-tooltipPlacementLeft":
									{
										mr: 2,
									},
							},
						},
						arrow: {
							sx: {
								color: "#2b3445",
							},
						},
					}}
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

			<Box display="flex">
				<Image
					src={product.thumbnail_url}
					alt="wiHelper"
					width="0"
					height="0"
					sizes="100vw"
					style={{ width: "100%", maxWidth: "100%", height: "auto" }}
					priority
				/>
			</Box>

			<CardContent sx={{ px: 5, py: 2 }}>
				<Typography
					gutterBottom
					variant="caption"
					component={Link}
					href={product.href}
				>
					{product.category_name}
				</Typography>
				<Typography variant="h3" mb={3} fontSize={14}>
					{product.name}
				</Typography>
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
							"& .MuiRating-icon": {
								fontSize: 14,
							},
						}}
					/>
				</Stack>
			</CardContent>

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
					transition: (theme) =>
						theme.transitions.create(["opacity", "box-shadow"]),
				}}
			>
				<Button
					fullWidth
					startIcon={<ShoppingCartOutlinedIcon />}
					sx={{
						"& .MuiButton-startIcon > .MuiSvgIcon-root": {
							fontSize: 16,
						},
					}}
				>
					Share
				</Button>
				<Box
					component={Link}
					href={product.href}
					display="flex"
					alignItems="center"
					gap={1}
				>
					<VisibilityOutlinedIcon
						sx={{ fontSize: 14, color: "text.secondary" }}
					/>
					<Typography variant="body2" color="textSecondary">
						Add to cart
					</Typography>
				</Box>
			</CardActions>
		</Card>
	);
};

export default ProductCard;
