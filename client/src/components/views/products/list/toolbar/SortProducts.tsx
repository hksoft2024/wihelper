import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import { alpha } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";

const sortOptions = [
	{ label: "Popularity", sort_by: "sell_count", sort_order: "ASC" },
	{ label: "Low - High Price", sort_by: "price", sort_order: "ASC" },
	{ label: "High - Low Price", sort_by: "price", sort_order: "DESC" },
	{ label: "Average Rating", sort_by: "rating", sort_order: "DESC" },
	{ label: "A - Z Order", sort_by: "name", sort_order: "ASC" },
	{ label: "Z - A Order", sort_by: "name", sort_order: "DESC" },
];

const SortProducts = () => {
	const t = useTranslations();

	return (
		<Stack direction="row" alignItems="center" gap={2} pb={4} mr={6}>
			<Typography variant="body2" color={alpha("#fff", 0.75)}>
				{t("SORT_BY")}:
			</Typography>

			<Select
				sx={{ bgcolor: "white", minWidth: 185, fontSize: 15 }}
				defaultValue={sortOptions[0].sort_by}
				slotProps={{
					input: {
						sx: { pl: 4 },
					},
				}}
			>
				{sortOptions.map((option, index) => (
					<MenuItem key={index} value={option.sort_by}>
						{option.label}
					</MenuItem>
				))}
			</Select>

			<Typography variant="body2" color={alpha("#fff", 0.75)}>
				{t("OF")} 287 {t("PRODUCTS").toLowerCase()}
			</Typography>
		</Stack>
	);
};

export default SortProducts;
