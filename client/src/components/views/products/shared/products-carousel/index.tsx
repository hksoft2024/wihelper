"use client";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CarouselNavigationButton from "~/components/ui/styles/CarouselNavigationButton";
import { Product } from "~/types/product";
import ProductCard from "../product-card";
import ProductsCarouselSkeleton from "./ProductsCarouselSkeleton";

type Props = {
	name: string;
	products: Product[];
};

const ProductsCarousel = ({ name, products }: Props) => {
	const theme = useTheme();

	const [isLoading, setIsLoading] = useState(true);

	const swiperPrevBtnId = `${name}-swiper-prev-btn`;
	const swiperNextBtnId = `${name}-swiper-next-btn`;

	useEffect(() => {
		setIsLoading(false);
	}, []);

	if (isLoading) return <ProductsCarouselSkeleton />;

	return (
		<Box px={5.5}>
			<Box position="relative">
				<Swiper
					loop={products.length > 4}
					navigation={{
						enabled: true,
						prevEl: `#${swiperPrevBtnId}`,
						nextEl: `#${swiperNextBtnId}`,
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

				<CarouselNavigationButton
					id={swiperPrevBtnId}
					sx={{
						left: 0,
						transform: "translate(-50%,-50%)",
					}}
				>
					<ArrowBackIosNewIcon color="action" sx={{ fontSize: 16 }} />
				</CarouselNavigationButton>
				<CarouselNavigationButton
					id={swiperNextBtnId}
					sx={{
						right: 0,
						transform: "translate(50%,-50%)",
					}}
				>
					<ArrowForwardIosIcon color="action" sx={{ fontSize: 16 }} />
				</CarouselNavigationButton>
			</Box>
		</Box>
	);
};

export default ProductsCarousel;
