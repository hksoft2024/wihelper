import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";

const PromotionBanner = () => {
	return (
		<Box component="section" pt={6} pb={7.5}>
			<Container>
				<Box py={6} bgcolor="#69b3fe17" borderRadius={1}>
					<Grid container spacing={7.5}>
						<Grid size={{ xs: 12, md: 5 }}>
							<Stack pl={12}>
								<Box>
									<Badge variant="rounded" color="error">
										Limited Offer
									</Badge>
								</Box>

								<Typography
									variant="h3"
									fontSize={{ xs: "calc(1.3rem + 0.6vw)", xl: 28 }}
									fontWeight={300}
									pt={6}
									pb={1}
								>
									All new
								</Typography>

								<Typography
									variant="h2"
									fontSize={{ xs: "calc(1.325rem + 0.9vw)", xl: 32 }}
									fontWeight={500}
									pb={1}
								>
									Last Medicare Diabetic Shoe
								</Typography>

								<Typography variant="h5" fontSize={20} fontWeight={300} pb={3}>
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
										<Typography fontWeight={500}>1</Typography>
										<Typography color="textMuted">d</Typography>
									</Stack>
									<Stack direction="row" alignItems="center">
										<Typography fontWeight={500}>12</Typography>
										<Typography color="textMuted">h</Typography>
									</Stack>
									<Stack direction="row" alignItems="center">
										<Typography fontWeight={500}>30</Typography>
										<Typography color="textMuted">m</Typography>
									</Stack>
									<Stack direction="row" alignItems="center">
										<Typography fontWeight={500}>45</Typography>
										<Typography color="textMuted">s</Typography>
									</Stack>
								</Stack>

								<Box>
									<Button
										color="secondary"
										size="large"
										endIcon={<KeyboardArrowRightOutlinedIcon />}
										sx={{ py: 2.5 }}
									>
										View offers
									</Button>
								</Box>
							</Stack>
						</Grid>
						<Grid size={{ xs: 12, md: 7 }}>
							<Box display="flex">
								<Image
									src="/images/home/banners/offer.png"
									alt="wiHelper"
									width="0"
									height="0"
									sizes="100vw"
									style={{ width: "100%", maxWidth: "100%", height: "auto" }}
									priority
								/>
							</Box>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</Box>
	);
};

export default PromotionBanner;
