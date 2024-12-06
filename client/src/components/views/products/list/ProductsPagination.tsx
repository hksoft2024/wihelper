"use client";

import Button, { buttonClasses } from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import NumericPagination from "~/components/ui/pagination/NumericPagination";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ProductsPagination = () => {
	const handleChangePage = (page: number) => {
		console.log(page);
	};

	return (
		<Stack
			pt={2}
			direction="row"
			alignItems="center"
			justifyContent="space-between"
		>
			<Button
				variant="text"
				startIcon={<ArrowBackIosIcon />}
				sx={{
					color: "text.secondary",
					px: 3,
					":hover": { bgcolor: "#f3f5f9" },
					[`.${buttonClasses.startIcon}`]: {
						ml: 0,
					},
				}}
			>
				Prev
			</Button>

			<NumericPagination
				total_pages={5}
				page={2}
				onChange={handleChangePage}
				hideNextButton
				hidePrevButton
			/>

			<Button
				variant="text"
				endIcon={<ArrowForwardIosIcon />}
				sx={{
					color: "text.secondary",
					px: 3,
					":hover": { bgcolor: "#f3f5f9" },
					[`.${buttonClasses.endIcon}`]: {
						mr: 0,
					},
				}}
			>
				Next
			</Button>
		</Stack>
	);
};

export default ProductsPagination;
