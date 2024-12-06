"use client";

import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import SearchBox from "../navbar/SearchBox";
import ShopMenu from "./shop-menu";
import NavigationMenu from "./navigation-menu";

type Props = {
	open: boolean;
};

const NavigationMobile = ({ open }: Props) => {
	return (
		<Collapse in={open}>
			<Box pt={3}>
				<Box mt={3} mb={4}>
					<SearchBox />
				</Box>

				<ShopMenu />

				<NavigationMenu />
			</Box>
		</Collapse>
	);
};

export default NavigationMobile;
