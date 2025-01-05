"use client";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Button, { buttonClasses } from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import NumericPagination from "~/components/ui/pagination/NumericPagination";
import { useRouter } from "~/i18n/routing";
import { PaginatedData } from "~/types/common";
import { Product } from "~/types/product";
import { stringifyUrl } from "~/utils/string";

type Props = {
	data: PaginatedData<Product>;
};

const ProductsPagination = ({ data }: Props) => {
	const router = useRouter();

	const handleChangePage = (page: number) => {
		router.push(stringifyUrl("/products", { PageIndex: page }));
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
				disabled={data.current_page === 1}
				onClick={() => handleChangePage(data.current_page - 1)}
			>
				Prev
			</Button>

			<NumericPagination
				total_pages={data.total_pages}
				page={data.current_page}
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
				disabled={data.current_page === data.total_pages}
				onClick={() => handleChangePage(data.current_page + 1)}
			>
				Next
			</Button>
		</Stack>
	);
};

export default ProductsPagination;
