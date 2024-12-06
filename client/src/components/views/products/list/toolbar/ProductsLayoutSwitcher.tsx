import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import { alpha, styled } from "@mui/material/styles";
import { useState } from "react";

enum ProductsLayout {
	Grid = "grid",
	List = "list",
}

const SwitchButton = styled(IconButton)(({ theme }) => ({
	color: alpha("#fff", 0.65),
	borderRadius: theme.spacing(1),
	transition: theme.transitions.create(["color", "background-color"]),
	":hover": { color: "#fff" },
	"&.Mui-disabled": {
		backgroundColor: "#fff",
		color: theme.palette.background.dark,
	},
}));

const ProductsLayoutSwitcher = () => {
	const [selectedLayout, setSelectedLayout] = useState<ProductsLayout>(
		ProductsLayout.Grid
	);

	const handleChangeLayout = (layout: ProductsLayout) => {
		setSelectedLayout(layout);
	};

	return (
		<Stack direction="row" alignItems="center" gap={2} mb={4}>
			<SwitchButton
				size="large"
				disabled={selectedLayout === ProductsLayout.Grid}
				onClick={() => handleChangeLayout(ProductsLayout.Grid)}
			>
				<GridViewOutlinedIcon fontSize="small" />
			</SwitchButton>

			<SwitchButton
				size="large"
				disabled={selectedLayout === ProductsLayout.List}
				onClick={() => handleChangeLayout(ProductsLayout.List)}
			>
				<FormatListBulletedOutlinedIcon fontSize="small" />
			</SwitchButton>
		</Stack>
	);
};

export default ProductsLayoutSwitcher;
