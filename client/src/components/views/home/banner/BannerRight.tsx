"use client";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "~/@core/components/mui/Button";
import { BANNER_RIGHT } from "~/fake-data/home-page";

const BannerRight = () => {
	return (
		<Stack
			position="relative"
			pt={{ xl: 6 }}
			px={{ xl: 4 }}
			sx={{
				"& .swiper": {
					width: 1,
					height: 1,
					"& .swiper-slide": {
						"& h1, & h2, & h5": {
							opacity: 0,
							transition: (theme) =>
								theme.transitions.create(["transform", "opacity"], {
									delay: "0.3s",
									duration: "0.45s",
								}),
						},
						"& h1": {
							transitionDelay: "0.5s",
						},
						"& h5": {
							transitionDelay: "0.7s",
						},
						"& .MuiButton-root": {
							opacity: 0,
							transform: "scale(0.8)",
							transition: (theme) =>
								`${theme.transitions.create(["transform", "opacity"], {
									delay: "1.1s",
									duration: "0.45s",
								})}, ${theme.transitions.create([
									"background-color",
									"box-shadow",
									"border-color",
									"color",
								])}`,
						},
						"& h1[data-text-animation='slide-up'], & h2[data-text-animation='slide-up'], & h5[data-text-animation='slide-up']":
							{
								transform: "translateY(45px)",
							},
						"& h1[data-text-animation='slide-right'], & h2[data-text-animation='slide-right'], & h5[data-text-animation='slide-right']":
							{
								transform: "translateX(-45px)",
							},
						"& h1[data-text-animation='grow'], & h2[data-text-animation='grow'], & h5[data-text-animation='grow']":
							{
								transform: "scale(0.8)",
							},
						"&.swiper-slide-active": {
							"& h1, & h2, & h5": {
								opacity: 1,
							},
							"& h1[data-text-animation='slide-up'], & h2[data-text-animation='slide-up'], & h5[data-text-animation='slide-up']":
								{
									transform: "translateY(0)",
								},
							"& h1[data-text-animation='slide-right'], & h2[data-text-animation='slide-right'], & h5[data-text-animation='slide-right']":
								{
									transform: "translateX(0)",
								},
							"& h1[data-text-animation='grow'], & h2[data-text-animation='grow'], & h5[data-text-animation='grow']":
								{
									transform: "scale(1)",
								},
							"& .MuiButton-root": {
								opacity: 1,
								transform: "scale(1)",
							},
						},
					},
				},
			}}
		>
			<Swiper
				pagination={{
					clickable: true,
					el: "#swiper-pagination-container",
				}}
				spaceBetween={50}
				modules={[Pagination]}
				grabCursor
			>
				{BANNER_RIGHT.map((item, index) => (
					<SwiperSlide key={index}>
						<Grid
							container
							spacing={{ xs: 0, md: 7.5 }}
							sx={{
								flexDirection: { xs: "column-reverse", md: "row" },
								alignItems: "center",
							}}
						>
							<Grid size={{ xs: 12, md: 6, lg: 5 }} offset={{ lg: 1 }}>
								<Stack
									pl={{ xs: 1.5, md: 1, lg: 1.5, xl: 0 }}
									ml={-1}
									pt={6}
									pb={{ xs: 0, md: 6 }}
									alignItems={{ xs: "center", md: "start" }}
								>
									<Typography
										variant="h2"
										fontWeight={300}
										fontSize={(theme) => ({
											xs: "calc(1.325rem + 0.9vw)",
											xl: theme.spacing(8),
										})}
										pb={1}
										mb={3}
										data-text-animation={item.text_animate}
									>
										{item.title_2}
									</Typography>

									<Typography
										variant="h1"
										fontWeight={500}
										mb={3}
										lineHeight={1}
										data-text-animation={item.text_animate}
									>
										{item.title_1}
									</Typography>

									<Typography
										variant="h5"
										fontWeight={300}
										fontSize="1.25rem"
										pb={4}
										mb={3}
										data-text-animation={item.text_animate}
									>
										{item.title_5}
									</Typography>

									<Box>
										<Button
											variant="contained"
											color={
												item.button_color === "primary" ? "primary" : "info"
											}
											size="large"
											hasShadow
											endIcon={<KeyboardArrowRightIcon />}
										>
											{item.button_text}
										</Button>
									</Box>
								</Stack>
							</Grid>
							<Grid size={{ xs: 12, md: 6 }}>
								<img
									src={item.image_url}
									alt="wiHelper"
									style={{
										maxWidth: "100%",
										height: "auto",
										margin: "0 auto",
										display: "block",
									}}
								/>
							</Grid>
						</Grid>
					</SwiperSlide>
				))}
			</Swiper>

			<Box pt={{ xs: 3.5, xl: 5 }} pb={2}>
				<Stack
					id="swiper-pagination-container"
					direction="row"
					alignItems="center"
					justifyContent="center"
					position="absolute"
					bottom={0}
					zIndex={2}
					height={24}
					sx={{
						"&.swiper-pagination-bullets.swiper-pagination-horizontal": {
							position: "relative",
							top: 0,
							"& .swiper-pagination-bullet": {
								cursor: "pointer",
								bgcolor: "rgb(182, 188, 197)",
								opacity: 1,
								width: 5,
								height: 5,
								mx: 1.5,
								borderRadius: 99,
								transition: (theme) => theme.transitions.create(["width"]),
								"&.swiper-pagination-bullet-active": {
									bgcolor: "primary.main",
									width: 20,
								},
							},
						},
					}}
				/>
			</Box>
		</Stack>
	);
};

export default BannerRight;
