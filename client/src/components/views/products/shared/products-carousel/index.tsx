"use client";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { styled, useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Product } from "~/types/product";
import ProductCard from "../product-card";
import ProductsCarouselSkeleton from "./ProductsCarouselSkeleton";

type Props = {
	name: string;
	products: Product[];
	shouldLoadingOnInit?: boolean;
};

const NavigationButton = styled(IconButton)(({ theme }) => ({
	backgroundColor: "#fff",
	height: 44,
	width: 44,
	padding: theme.spacing(2),
	border: `1px solid ${theme.palette.divider}`,
	borderRadius: "50%",
	position: "absolute",
	top: "50%",
	zIndex: 2,
	":hover": {
		backgroundColor: "#fff",
	},
}));

const ProductsCarousel = ({ name, products, shouldLoadingOnInit }: Props) => {
	const theme = useTheme();

	const [isLoading, setIsLoading] = useState(shouldLoadingOnInit);

	useEffect(() => {
		if (shouldLoadingOnInit) {
			setIsLoading(false);
		}
	}, []);

	if (isLoading) {
		return <ProductsCarouselSkeleton />;
	}

	return (
		<Box px={5.5}>
			<Box position="relative">
				<Swiper
					loop={products.length > 4}
					navigation={{
						enabled: true,
						prevEl: `#${name}-swiper-prev-btn`,
						nextEl: `#${name}-swiper-next-btn`,
					}}
					modules={[Navigation]}
					grabCursor
					slidesPerView={2}
					spaceBetween={30}
					breakpoints={{
						[theme.breakpoints.values.xs]: {
							slidesPerView: 1,
						},
						[theme.breakpoints.values.sm]: {
							slidesPerView: 2,
							spaceBetween: 18,
						},
						[theme.breakpoints.values.md]: {
							slidesPerView: 3,
							spaceBetween: 20,
						},
						[theme.breakpoints.values.xl]: {
							slidesPerView: 4,
						},
					}}
				>
					{products.map((product) => (
						<SwiperSlide key={product.id}>
							<ProductCard product={product} disableHover />
						</SwiperSlide>
					))}
				</Swiper>

				<NavigationButton
					id={`${name}-swiper-prev-btn`}
					sx={{
						left: 0,
						transform: "translate(-50%,-50%)",
					}}
				>
					<ArrowBackIosNewIcon fontSize="small" />
				</NavigationButton>
				<NavigationButton
					id={`${name}-swiper-next-btn`}
					sx={{
						right: 0,
						transform: "translate(50%,-50%)",
					}}
				>
					<ArrowForwardIosIcon fontSize="small" />
				</NavigationButton>
			</Box>
		</Box>
	);
};

export default ProductsCarousel;
