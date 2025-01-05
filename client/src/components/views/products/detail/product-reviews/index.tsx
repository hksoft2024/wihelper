"use client";

import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";
import LoadingButton from "@mui/lab/LoadingButton";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { getProductReviews } from "~/actions/productActions";
import Loader from "~/components/ui/Loader";
import { PRODUCT_REVIEWS_COUNT_PER_PAGE } from "~/constants/product";
import { ProductReview, ProductReviewsQuery } from "~/types/product";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";

const ProductReviews = () => {
	const productId = String(useParams().productId);

	const isFirstMount = useRef(true);

	const [pageSize, setPageSize] = useState(PRODUCT_REVIEWS_COUNT_PER_PAGE);
	const query: ProductReviewsQuery = {
		productId: String(productId),
		PageSize: pageSize,
	};
	const [reviews, setReviews] = useState<ProductReview[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		isFirstMount.current = false;
	}, []);

	useEffect(() => {
		const fetchReviews = async () => {
			setIsLoading(true);

			const res = await getProductReviews(query);

			if (res.is_succeeded) {
				setReviews(res.data.items);
			}

			setIsLoading(false);
		};

		fetchReviews();
	}, [pageSize]);

	const handleLoadMore = () => {
		setPageSize((prev) => prev + PRODUCT_REVIEWS_COUNT_PER_PAGE);
	};

	if (isLoading && isFirstMount.current) {
		return <Loader scope="component" height={200} size={32} />;
	}

	return (
		<Grid container spacing={7.5}>
			<Grid size={{ xs: 12, md: 7 }}>
				<Stack>
					<ReviewList reviews={reviews} />
				</Stack>
				{reviews.length > 0 && (
					<Box textAlign="center" mt={11.25}>
						<LoadingButton
							variant="outlined"
							color="secondary"
							size="large"
							startIcon={<RefreshOutlinedIcon />}
							onClick={handleLoadMore}
							loading={isLoading}
						>
							Load more reviews
						</LoadingButton>
					</Box>
				)}
			</Grid>
			<Grid size={{ xs: 12, md: 5 }}>
				<Box pt={{ xs: 24, md: 0 }} mt={{ xs: 2, md: 0 }}>
					<ReviewForm />
				</Box>
			</Grid>
		</Grid>
	);
};

export default ProductReviews;
