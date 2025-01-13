"use client";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useLocale } from "next-intl";
import { useRouter } from "nextjs-toploader/app";
import SimplePagination from "~/components/ui/pagination/SimplePagination";
import { PaginatedData } from "~/types/common";
import { Product } from "~/types/product";
import { stringifyUrl } from "~/utils/string";
import ProductsLayoutSwitcher from "./ProductsLayoutSwitcher";
import SortProducts from "./SortProducts";

type Props = {
	data: PaginatedData<Product>;
};

const ProductsToolbar = ({ data }: Props) => {
	const locale = useLocale();
	const router = useRouter();

	const handleChangePage = (page: number) => {
		router.push(stringifyUrl(`/${locale}/products`, { PageIndex: page }));
	};

	return (
		<Stack
			direction="row"
			alignItems="center"
			justifyContent={{ xs: "center", sm: "space-between" }}
			pt={2}
			pb={12}
		>
			<SortProducts />

			<Box pb={4}>
				<SimplePagination
					page={data.current_page}
					total_pages={data.total_pages}
					onChange={handleChangePage}
				/>
			</Box>

			<ProductsLayoutSwitcher />
		</Stack>
	);
};

export default ProductsToolbar;
