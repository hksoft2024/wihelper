"use client";

import Grid from "@mui/material/Grid2";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useMemo } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Product } from "~/types/product";
import ProductCard from "../../products/shared/product-card";

type Props = {
	products: Product[];
};

const ProductsByCategoryCarousel = ({ products }: Props) => {
	const isDownLgScreen = useMediaQuery((theme) => theme.breakpoints.down("lg"));

	const productsSlides = useMemo<Product[][]>(() => {
		const productsPerSlide = isDownLgScreen ? 4 : 6;
		const slides: Product[][] = [];

		for (let i = 0; i < products.length; i += productsPerSlide) {
			slides.push(products.slice(i, i + productsPerSlide));
		}

		return slides;
	}, [isDownLgScreen]);

	return (
		<Swiper
			navigation={{
				enabled: true,
				prevEl: `#products-by-category-swiper-prev-btn`,
				nextEl: `#products-by-category-swiper-next-btn`,
			}}
			modules={[Navigation]}
			grabCursor
			spaceBetween={16}
		>
			{productsSlides.map((productsSlide, index) => (
				<SwiperSlide key={index}>
					<Grid container columnSpacing={4} rowSpacing={6}>
						{productsSlide.map((product) => (
							<Grid key={product.id} size={{ xs: 6, lg: 4 }}>
								<ProductCard product={product} disableHover />
							</Grid>
						))}
					</Grid>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default ProductsByCategoryCarousel;
