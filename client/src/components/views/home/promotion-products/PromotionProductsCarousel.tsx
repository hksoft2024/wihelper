"use client";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Badge from "~/@core/components/mui/Badge";
import Button from "~/@core/components/mui/Button";
import CarouselNavigationButton from "~/components/ui/styles/CarouselNavigationButton";
import { Link } from "~/i18n/routing";
import { Product } from "~/types/product";

dayjs.extend(duration);

type Props = {
	products: Product[];
};

const PromotionProductsCarousel = ({ products }: Props) => {
	const t = useTranslations();

	const [promotionExpireTimes, setPromotionExpireTimes] = useState(
		products.map((product) => dayjs(product.end_time).diff(new Date()))
	);
	const [isLoading, setIsLoading] = useState(true);

	const swiperPrevBtnId = "promotion-products-swiper-prev-btn";
	const swiperNextBtnId = "promotion-products-swiper-next-btn";

	useEffect(() => {
		setIsLoading(false);
	}, []);

	useEffect(() => {
		const interval = setInterval(() => {
			setPromotionExpireTimes((prev) =>
				prev.map((time) => (time > 0 ? time - 1000 : 0))
			);
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	if (isLoading)
		return <Skeleton variant="rounded" animation="wave" sx={{ height: 500 }} />;

	return (
		<Box position="relative">
			<Swiper
				loop={products.length > 4}
				navigation={{
					enabled: true,
					prevEl: `#${swiperPrevBtnId}`,
					nextEl: `#${swiperNextBtnId}`,
				}}
				modules={[Navigation, Autoplay]}
				grabCursor
				autoplay
			>
				{products.map((product, index) => {
					const formattedDuration = dayjs.duration(promotionExpireTimes[index]);

					return (
						<SwiperSlide key={product.id}>
							<Box py={6} bgcolor="#69b3fe17" borderRadius={1}>
								<Grid container spacing={7.5}>
									<Grid size={{ xs: 12, md: 5 }}>
										<Stack height={1} pl={12} justifyContent="center">
											{product.badge && (
												<Box>
													<Badge
														size="small"
														variant="rounded"
														color={product.badge_color ?? "default"}
													>
														{product.badge}
													</Badge>
												</Box>
											)}

											<Typography variant="h3" fontWeight={300} pt={6} pb={1}>
												All new
											</Typography>

											<Typography variant="h2" fontWeight={500} pb={1}>
												{product.name}
											</Typography>

											<Typography
												variant="h5"
												fontSize={20}
												fontWeight={300}
												pb={3}
											>
												at discounted price. Hurry up!
											</Typography>

											<Stack
												direction="row"
												alignItems="center"
												gap={3}
												py={2}
												mb={7}
											>
												<Stack direction="row" alignItems="center">
													<Typography fontWeight={500}>
														{formattedDuration.days()}
													</Typography>
													<Typography color="textMuted">d</Typography>
												</Stack>
												<Stack direction="row" alignItems="center">
													<Typography fontWeight={500}>
														{formattedDuration.hours()}
													</Typography>
													<Typography color="textMuted">h</Typography>
												</Stack>
												<Stack direction="row" alignItems="center">
													<Typography fontWeight={500}>
														{formattedDuration.minutes()}
													</Typography>
													<Typography color="textMuted">m</Typography>
												</Stack>
												<Stack direction="row" alignItems="center">
													<Typography fontWeight={500}>
														{formattedDuration.seconds()}
													</Typography>
													<Typography color="textMuted">s</Typography>
												</Stack>
											</Stack>

											<Box>
												<Button
													color="secondary"
													size="large"
													endIcon={<KeyboardArrowRightOutlinedIcon />}
													sx={{ py: 2.5 }}
													LinkComponent={Link}
													href={`/products/${product.id}`}
												>
													{t("VIEW_OFFERS")}
												</Button>
											</Box>
										</Stack>
									</Grid>
									<Grid size={{ xs: 12, md: 7 }}>
										<Box display="flex">
											<Image
												src={product.thumbnail_url}
												alt={product.name}
												width="0"
												height="0"
												sizes="100vw"
											/>
										</Box>
									</Grid>
								</Grid>
							</Box>
						</SwiperSlide>
					);
				})}
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
	);
};

export default PromotionProductsCarousel;
