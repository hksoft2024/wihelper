"use client";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import SimplePagination from "~/components/ui/pagination/SimplePagination";
import ProductsLayoutSwitcher from "./ProductsLayoutSwitcher";
import SortProducts from "./SortProducts";

const ProductsToolbar = () => {
	const handleChangePage = (page: number) => {
		console.log(page);
	};

	return (
		<Stack
			direction="row"
			alignItems="center"
			justifyContent="space-between"
			pt={2}
			pb={12}
		>
			<SortProducts />

			<Box pb={4}>
				<SimplePagination
					page={2}
					total_pages={5}
					onChange={handleChangePage}
				/>
			</Box>

			<ProductsLayoutSwitcher />
		</Stack>
	);
};

export default ProductsToolbar;
