"use client";

import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";

const ProductReviews = () => {
	return (
		<Grid container spacing={7.5}>
			<Grid size={{ xs: 12, md: 7 }}>
				<Stack>
					<ReviewList />
				</Stack>
				<Box textAlign="center" mt={11.25}>
					<Button
						variant="outlined"
						color="secondary"
						size="large"
						startIcon={<RefreshOutlinedIcon />}
					>
						Load more reviews
					</Button>
				</Box>
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
