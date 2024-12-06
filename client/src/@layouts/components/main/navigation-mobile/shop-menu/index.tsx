import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import Fade from "@mui/material/Fade";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { DEPARTMENTS_MENU } from "~/fake-data/departments-menu";
import ShopMenuItem from "./ShopMenuItem";

const ShopMenu = () => {
	const t = useTranslations();

	const [showSubMenu, setShowSubMenu] = useState(false);

	const handleToggleMenu = () => {
		setShowSubMenu((prev) => !prev);
	};

	return (
		<List disablePadding>
			<ListItem
				sx={{
					borderRadius: 1,
					px: 4.5,
					py: 2.5,
					mb: 2.5,
					bgcolor: "#f6f9fc",
					cursor: "pointer",
					":hover, &:has(+ *:hover)": {
						"& > .MuiListItemIcon-root .MuiSvgIcon-root": {
							fill: (theme) => theme.palette.primary.main,
						},
						"& > .MuiSvgIcon-root": {
							fill: (theme) => theme.palette.primary.main,
						},
						"& > .MuiTypography-root": {
							color: "primary.main",
						},
					},
				}}
				onClick={handleToggleMenu}
			>
				<ListItemIcon sx={{ minWidth: 0, mr: 2 }}>
					<StorefrontOutlinedIcon
						fontSize="small"
						color="action"
						sx={{
							transition: (theme) => theme.transitions.create(["fill"]),
						}}
					/>
				</ListItemIcon>

				<Typography color="textSecondary" fontWeight={500}>
					{t("SHOP")}
				</Typography>
				<ArrowDropDownOutlinedIcon
					fontSize="small"
					sx={(theme) => ({
						color: theme.palette.text.secondary,
						transition: theme.transitions.create(["fill"]),
					})}
				/>
			</ListItem>

			<Fade in={showSubMenu} mountOnEnter unmountOnExit>
				<List
					disablePadding
					sx={{ bgcolor: "#f6f9fc", pb: 2, mt: -2.5, mb: 2.5 }}
				>
					{DEPARTMENTS_MENU.map((item, index) => (
						<ShopMenuItem key={index} item={item} />
					))}
				</List>
			</Fade>
		</List>
	);
};

export default ShopMenu;
