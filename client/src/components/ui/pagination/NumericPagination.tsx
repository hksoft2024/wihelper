import Pagination from "@mui/material/Pagination";
import React from "react";

type Props = {
	page: number;
	total_pages: number;
	onChange: (page: number) => void;
	hidePrevButton?: boolean;
	hideNextButton?: boolean;
};

const NumericPagination = ({
	page,
	onChange,
	total_pages,
	hideNextButton,
	hidePrevButton,
}: Props) => {
	const handleChangePage = (selectedPage: number) => {
		if (selectedPage !== page) {
			onChange(selectedPage);
		}
	};

	return (
		<Pagination
			count={total_pages}
			page={page}
			onChange={(_, page) => handleChangePage(page)}
			shape="rounded"
			color="primary"
			hidePrevButton={hidePrevButton}
			hideNextButton={hideNextButton}
		/>
	);
};

export default NumericPagination;
