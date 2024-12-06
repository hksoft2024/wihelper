"use client";

import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import BrandWidget from "./BrandWidget";
import CategoryWidget from "./CategoryWidget";
import ColorWidget from "./ColorWidget";
import PriceWidget from "./PriceWidget";
import SizeWidget from "./SizeWidget";

const Widgets = () => {
	return (
		<Paper
			sx={{
				py: 8.5,
				px: 7.5,
				mr: 9.5,
				borderRadius: 2,
			}}
		>
			<Stack divider={<Divider sx={{ my: 6 }} />}>
				<CategoryWidget />
				<PriceWidget />
				<BrandWidget />
				<SizeWidget />
				<ColorWidget />
			</Stack>
		</Paper>
	);
};

export default Widgets;
