import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import { alpha } from "@mui/material/styles";
import { useState } from "react";

enum ProductsLayout {
	Grid = "grid",
	List = "list",
}

const ProductsLayoutSwitcher = () => {
	const [selectedLayout, setSelectedLayout] = useState<ProductsLayout>(
		ProductsLayout.Grid
	);

	const handleChangeLayout = (layout: ProductsLayout) => {
		setSelectedLayout(layout);
	};

	return (
		<Stack direction="row" alignItems="center" gap={2} mb={4}>
			<IconButton
				size="large"
				disabled={selectedLayout === ProductsLayout.Grid}
				onClick={() => handleChangeLayout(ProductsLayout.Grid)}
				sx={{
					color: alpha("#fff", 0.65),
					borderRadius: 1,
					transition: (theme) =>
						theme.transitions.create(["color", "background-color"]),
					":hover": { color: "#fff" },
					"&.Mui-disabled": {
						backgroundColor: "#fff",
						color: "background.dark",
					},
				}}
			>
				<GridViewOutlinedIcon fontSize="small" />
			</IconButton>

			<IconButton
				size="large"
				disabled={selectedLayout === ProductsLayout.List}
				onClick={() => handleChangeLayout(ProductsLayout.List)}
				sx={{
					color: alpha("#fff", 0.65),
					borderRadius: 1,
					transition: (theme) =>
						theme.transitions.create(["color", "background-color"]),
					":hover": { color: "#fff" },
					"&.Mui-disabled": {
						backgroundColor: "#fff",
						color: "background.dark",
					},
				}}
			>
				<FormatListBulletedOutlinedIcon fontSize="small" />
			</IconButton>
		</Stack>
	);
};

export default ProductsLayoutSwitcher;
