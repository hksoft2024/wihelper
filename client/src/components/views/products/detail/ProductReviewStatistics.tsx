"use client";

import StarIcon from "@mui/icons-material/Star";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import LinearProgress from "@mui/material/LinearProgress";
import linearProgressClasses from "@mui/material/LinearProgress/linearProgressClasses";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";

const StyledLinearProgress = styled(LinearProgress)({
	borderRadius: 99,
	backgroundColor: "#f3f5f9",
});

const ProductReviewStatistics = () => {
	const t = useTranslations();

	return (
		<Grid container spacing={7.5}>
			<Grid size={{ xs: 12, md: 5, lg: 4 }}>
				<Typography variant="h3" mb={6}>
					{t("REVIEWS_COUNT", { count: 74 })}
				</Typography>
				<Stack direction="row" alignItems="center" gap={2}>
					<Rating
						size="small"
						value={4}
						readOnly
						sx={{ color: "secondary.main" }}
					/>
					<Typography color="textSecondary">4.1 Overall rating</Typography>
				</Stack>
				<Stack my={4}>
					<Typography variant="body2" color="textMuted">
						58 out of 74 (77%)
						<br />
						Customers recommended this product
					</Typography>
				</Stack>
			</Grid>
			<Grid size={{ xs: 12, md: 7, lg: 8 }}>
				<Stack spacing={2}>
					<Stack direction="row" alignItems="center" gap={4}>
						<Typography
							color="textMuted"
							display="flex"
							alignItems="center"
							gap={0.5}
						>
							5
							<StarIcon
								sx={(theme) => ({
									fontSize: 16,
									fill: theme.palette.text.primary,
									mb: 0.5,
								})}
							/>
						</Typography>
						<Box flex={1}>
							<StyledLinearProgress
								value={60}
								variant="determinate"
								color="success"
							/>
						</Box>
						<Typography color="textMuted">43</Typography>
					</Stack>
					<Stack direction="row" alignItems="center" gap={4}>
						<Typography
							color="textMuted"
							display="flex"
							alignItems="center"
							gap={0.5}
						>
							4
							<StarIcon
								sx={(theme) => ({
									fontSize: 16,
									fill: theme.palette.text.primary,
									mb: 0.5,
								})}
							/>
						</Typography>
						<Box flex={1}>
							<StyledLinearProgress
								value={27}
								variant="determinate"
								sx={{
									[`.${linearProgressClasses.bar}`]: {
										backgroundColor: "#a7e453",
									},
								}}
							/>
						</Box>
						<Typography color="textMuted">16</Typography>
					</Stack>
					<Stack direction="row" alignItems="center" gap={4}>
						<Typography
							color="textMuted"
							display="flex"
							alignItems="center"
							gap={0.5}
						>
							3
							<StarIcon
								sx={(theme) => ({
									fontSize: 16,
									fill: theme.palette.text.primary,
									mb: 0.5,
								})}
							/>
						</Typography>
						<Box flex={1}>
							<StyledLinearProgress
								value={17}
								variant="determinate"
								sx={{
									[`.${linearProgressClasses.bar}`]: {
										backgroundColor: "#ffda75",
									},
								}}
							/>
						</Box>
						<Typography color="textMuted">9</Typography>
					</Stack>
					<Stack direction="row" alignItems="center" gap={4}>
						<Typography
							color="textMuted"
							display="flex"
							alignItems="center"
							gap={0.5}
						>
							2
							<StarIcon
								sx={(theme) => ({
									fontSize: 16,
									fill: theme.palette.text.primary,
									mb: 0.5,
								})}
							/>
						</Typography>
						<Box flex={1}>
							<StyledLinearProgress
								value={9}
								variant="determinate"
								color="warning"
							/>
						</Box>
						<Typography color="textMuted">4</Typography>
					</Stack>
					<Stack direction="row" alignItems="center" gap={4}>
						<Typography
							color="textMuted"
							display="flex"
							alignItems="center"
							gap={0.5}
						>
							1
							<StarIcon
								sx={(theme) => ({
									fontSize: 16,
									fill: theme.palette.text.primary,
									mb: 0.5,
								})}
							/>
						</Typography>
						<Box flex={1}>
							<StyledLinearProgress
								value={4}
								variant="determinate"
								color="error"
							/>
						</Box>
						<Typography color="textMuted">2</Typography>
					</Stack>
				</Stack>
			</Grid>
		</Grid>
	);
};

export default ProductReviewStatistics;
