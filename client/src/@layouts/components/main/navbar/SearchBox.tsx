import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import inputAdornmentClasses from "@mui/material/InputAdornment/inputAdornmentClasses";
import svgIconClasses from "@mui/material/SvgIcon/svgIconClasses";
import TextField from "@mui/material/TextField";
import { useTranslations } from "next-intl";

const SearchBox = () => {
	const t = useTranslations();

	return (
		<Box>
			<TextField
				fullWidth
				placeholder={t("SEARCH_WORKING_FEET")}
				sx={{
					[`:has(input:focus) .${inputAdornmentClasses.root} .${svgIconClasses.root}`]:
						{
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
