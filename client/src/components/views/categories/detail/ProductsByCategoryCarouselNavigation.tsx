"use client";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Stack from "@mui/material/Stack";
import CarouselNavigationButton from "~/components/ui/styles/CarouselNavigationButton";

const ProductsByCategoryCarouselNavigation = () => {
	return (
		<Stack direction="row" alignItems="center" gap={1.5}>
			<CarouselNavigationButton
				id="products-by-category-swiper-prev-btn"
				position="relative"
				size={36}
			>
				<ArrowBackIosNewIcon color="action" sx={{ fontSize: 14 }} />
			</CarouselNavigationButton>
			<CarouselNavigationButton
				id="products-by-category-swiper-next-btn"
				position="relative"
				size={36}
			>
				<ArrowForwardIosIcon color="action" sx={{ fontSize: 14 }} />
			</CarouselNavigationButton>
		</Stack>
	);
};

export default ProductsByCategoryCarouselNavigation;
