import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";

type Props = {
	page: number;
	total_pages: number;
	onChange: (page: number) => void;
};

const SimplePagination = ({ page, total_pages, onChange }: Props) => {
	const handlePreviousPage = () => {
		if (page > 1) {
			onChange(page - 1);
		}
	};

	const handleNextPage = () => {
		if (page < total_pages) {
			onChange(page + 1);
		}
	};

	return (
		<Stack direction="row" alignItems="center" gap={2}>
			<IconButton
				size="small"
				onClick={handlePreviousPage}
				disabled={page === 1}
				sx={{
					color: alpha("#fff", 0.65),
					transition: (theme) => theme.transitions.create(["color"]),
					":hover": { color: "#fff" },
					"&.Mui-disabled": { color: alpha("#fff", 0.4) },
				}}
			>
				<ArrowBackIosIcon fontSize="small" />
			</IconButton>
			<Typography color="white">
				{page} / {total_pages}
			</Typography>
			<IconButton
				size="small"
				onClick={handleNextPage}
				disabled={page === total_pages}
				sx={{
					color: alpha("#fff", 0.65),
					transition: (theme) => theme.transitions.create(["color"]),
					":hover": { color: "#fff" },
					"&.Mui-disabled": { color: alpha("#fff", 0.4) },
				}}
			>
				<ArrowForwardIosIcon fontSize="small" />
			</IconButton>
		</Stack>
	);
};

export default SimplePagination;
