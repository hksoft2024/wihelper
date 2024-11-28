import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useTranslations } from "next-intl";

const SearchBox = () => {
	const t = useTranslations();

	return (
		<Box>
			<TextField
				fullWidth
				placeholder={t("SEARCH_WORKING_FEET")}
				sx={{
					":has(input:focus) .MuiInputAdornment-root svg": {
						opacity: 0,
					},
				}}
				slotProps={{
					input: {
						startAdornment: (
							<InputAdornment position="start">
								<SearchOutlinedIcon />
							</InputAdornment>
						),
					},
				}}
			/>
		</Box>
	);
};

export default SearchBox;
