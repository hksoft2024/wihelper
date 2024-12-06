import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import Box from "@mui/material/Box";
import boxClasses from "@mui/material/Box/boxClasses";
import Fade from "@mui/material/Fade";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import listItemIconClasses from "@mui/material/ListItemIcon/listItemIconClasses";
import svgIconClasses from "@mui/material/SvgIcon/svgIconClasses";
import Typography from "@mui/material/Typography";
import typographyClasses from "@mui/material/Typography/typographyClasses";
import { Fragment, useState } from "react";
import { Link } from "~/i18n/routing";
import { DepartmentsMenuItemType } from "~/types/navigation";

type Props = {
	item: DepartmentsMenuItemType;
};

const ShopMenuItem = ({ item }: Props) => {
	const [openSubMenu, setOpenSubMenu] = useState(false);

	const handleToggleSubMenu = () => {
		setOpenSubMenu((prev) => !prev);
	};

	return (
		<Fragment>
			<ListItem
				sx={{
					borderRadius: 1,
					px: 5.5,
					py: 2.5,
					cursor: "pointer",
					borderBottom: 1,
					borderColor: "divider",
					":last-child": {
						borderBottom: 0,
					},
					[`:hover, :has(+ .${boxClasses.root}:hover)`]: {
						[`> .${listItemIconClasses.root} .${svgIconClasses.root}`]: {
							fill: (theme) => theme.palette.primary.main,
						},
						[`> .${svgIconClasses.root}`]: {
							fill: (theme) => theme.palette.primary.main,
						},
						[`> .${typographyClasses.root}`]: {
							color: "primary.main",
						},
					},
				}}
				onClick={handleToggleSubMenu}
			>
				{!!item.startIcon && (
					<ListItemIcon sx={{ minWidth: 0, mr: 2 }}>
						{item.startIcon}
					</ListItemIcon>
				)}

				<Typography variant="body2" color="textSecondary" fontWeight={500}>
					{item.label}
				</Typography>
				<ArrowDropDownOutlinedIcon
					fontSize="small"
					sx={(theme) => ({
						color: theme.palette.text.secondary,
						transition: theme.transitions.create(["fill"]),
					})}
				/>
			</ListItem>

			<Fade in={openSubMenu} mountOnEnter unmountOnExit>
				<Box mx={4} p={6}>
					{!!item.children.heading && (
						<Typography variant="h6" mb={4}>
							{item.children.heading}
						</Typography>
					)}

					<List disablePadding>
						{item.children.data.map((sub, index) => (
							<ListItem key={index} disablePadding sx={{ pb: 1, mb: 2 }}>
								<Typography
									variant="body2"
									color="textSecondary"
									component={Link}
									href={sub.href}
									sx={{ ":hover": { color: "primary.main" } }}
								>
									{sub.label}
								</Typography>
							</ListItem>
						))}
					</List>
				</Box>
			</Fade>
		</Fragment>
	);
};

export default ShopMenuItem;
