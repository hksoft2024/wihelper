"use client";

import Stack from "@mui/material/Stack";
import { NAVIGATION_MENU } from "~/fake-data/navigation-menu";
import NavigationItem from "./NavigationItem";

const NavigationMenu = () => {
	return (
		<Stack direction="row" alignItems="center">
			{NAVIGATION_MENU.map((item, index) => (
				<NavigationItem key={index} item={item} />
			))}
		</Stack>
	);
};

export default NavigationMenu;
