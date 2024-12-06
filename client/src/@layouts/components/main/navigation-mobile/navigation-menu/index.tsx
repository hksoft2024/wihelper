import List from "@mui/material/List";
import { NAVIGATION_MENU } from "~/fake-data/navigation-menu";
import NavigationItem from "./NavigationItem";

const NavigationMenu = () => {
	return (
		<List disablePadding>
			{NAVIGATION_MENU.map((item, index) => (
				<NavigationItem key={index} item={item} />
			))}
		</List>
	);
};

export default NavigationMenu;
