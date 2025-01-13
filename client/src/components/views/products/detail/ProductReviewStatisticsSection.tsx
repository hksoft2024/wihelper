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
import { Product } from "~/types/product";

type Props = {
	product: Product;
};

const StyledLinearProgress = styled(LinearProgress)({
	borderRadius: 99,
	backgroundColor: "#f3f5f9",
});

const StyledStarIcon = styled(StarIcon)(({ theme }) => ({
	fontSize: 16,
	fill: theme.palette.text.primary,
	mb: theme.spacing(0.5),
}));

const ProductReviewStatisticsSection = ({ product }: Props) => {
	const t = useTranslations();

	const calculateDistributorPercentage = (distributorsCount: number) => {
		if (!product.review_overview || product.review_overview.total === 0) {
			return 0;
		}

		return Math.ceil((distributorsCount / product.review_overview.total) * 100);
	};

	if (!product.review_overview) return null;

	return (
		<Grid container spacing={7.5}>
			<Grid size={{ xs: 12, md: 5, lg: 4 }}>
				<Typography variant="h3" mb={6}>
					{t("REVIEWS_COUNT", { count: product.review_overview.total })}
				</Typography>
				<Stack direction="row" alignItems="center" gap={2}>
					<Rating
						size="small"
						value={product.rating}
						readOnly
						sx={{ color: "secondary.main" }}
					/>
					<Typography color="textSecondary">
						{t("AVERAGE_OVERALL_RATING", {
							average: product.review_overview.average,
						})}
					</Typography>
				</Stack>
				<Stack my={4}>
					<Typography variant="body2" color="textMuted">
						{[
							product.review_overview.distribution[5],
							t("OUT_OF"),
							product.review_overview.total,
							`(${calculateDistributorPercentage(
								product.review_overview.distribution[5]
							)}%)`,
						].join(" ")}
						<br />
						{t("CUSTOMERS_RECOMMENDED_THIS_PRODUCT")}
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
							<StyledStarIcon />
						</Typography>
						<Box flex={1}>
							<StyledLinearProgress
								value={calculateDistributorPercentage(
									product.review_overview.distribution[5]
								)}
								variant="determinate"
								color="success"
							/>
						</Box>
						<Typography color="textMuted">
							{product.review_overview.distribution[5]}
						</Typography>
					</Stack>
					<Stack direction="row" alignItems="center" gap={4}>
						<Typography
							color="textMuted"
							display="flex"
							alignItems="center"
							gap={0.5}
						>
							4
							<StyledStarIcon />
						</Typography>
						<Box flex={1}>
							<StyledLinearProgress
								value={calculateDistributorPercentage(
									product.review_overview.distribution[4]
								)}
								variant="determinate"
								sx={{
									[`.${linearProgressClasses.bar}`]: {
										backgroundColor: "#a7e453",
									},
								}}
							/>
						</Box>
						<Typography color="textMuted">
							{product.review_overview.distribution[4]}
						</Typography>
					</Stack>
					<Stack direction="row" alignItems="center" gap={4}>
						<Typography
							color="textMuted"
							display="flex"
							alignItems="center"
							gap={0.5}
						>
							3
							<StyledStarIcon />
						</Typography>
						<Box flex={1}>
							<StyledLinearProgress
								value={calculateDistributorPercentage(
									product.review_overview.distribution[3]
								)}
								variant="determinate"
								sx={{
									[`.${linearProgressClasses.bar}`]: {
										backgroundColor: "#ffda75",
									},
								}}
							/>
						</Box>
						<Typography color="textMuted">
							{product.review_overview.distribution[3]}
						</Typography>
					</Stack>
					<Stack direction="row" alignItems="center" gap={4}>
						<Typography
							color="textMuted"
							display="flex"
							alignItems="center"
							gap={0.5}
						>
							2
							<StyledStarIcon />
						</Typography>
						<Box flex={1}>
							<StyledLinearProgress
								value={calculateDistributorPercentage(
									product.review_overview.distribution[2]
								)}
								variant="determinate"
								color="warning"
							/>
						</Box>
						<Typography color="textMuted">
							{product.review_overview.distribution[2]}
						</Typography>
					</Stack>
					<Stack direction="row" alignItems="center" gap={4}>
						<Typography
							color="textMuted"
							display="flex"
							alignItems="center"
							gap={0.5}
						>
							1
							<StyledStarIcon />
						</Typography>
						<Box flex={1}>
							<StyledLinearProgress
								value={calculateDistributorPercentage(
									product.review_overview.distribution[1]
								)}
								variant="determinate"
								color="error"
							/>
						</Box>
						<Typography color="textMuted">
							{product.review_overview.distribution[1]}
						</Typography>
					</Stack>
				</Stack>
			</Grid>
		</Grid>
	);
};

export default ProductReviewStatisticsSection;
