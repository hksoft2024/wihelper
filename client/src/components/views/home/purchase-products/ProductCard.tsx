"use client";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SyncOutlinedIcon from "@mui/icons-material/SyncOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Fade from "@mui/material/Fade";
import IconButton from "@mui/material/IconButton";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Badge from "~/@core/components/mui/Badge";
import Button from "~/@core/components/mui/Button";
import { Link } from "~/i18n/routing";
import { Product } from "~/types/product";

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
					Add to cart
				</Button>
				<Box
					component={Link}
					href={product.href}
					display="flex"
					alignItems="center"
					gap={1}
					sx={{
						":hover": {
							"& > .MuiSvgIcon-root": {
								fill: (theme) => theme.palette.primary.main,
							},
							"& > .MuiTypography-root": {
								color: "primary.main",
							},
						},
					}}
				>
					<VisibilityOutlinedIcon
						sx={{
							fontSize: 16,
							color: "text.secondary",
							transition: (theme) => theme.transitions.create(["fill"]),
						}}
					/>
					<Typography variant="body2" color="textSecondary">
						Quick view
					</Typography>
				</Box>
			</CardActions>
		</Card>
	);
};

export default ProductCard;
