import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import Fade from "@mui/material/Fade";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { Fragment, useState } from "react";
import { Link } from "~/i18n/routing";
import { NavigationItemType } from "~/types/navigation";

type Props = {
	item: NavigationItemType;
};

const NavigationItem = ({ item }: Props) => {
	const [showSubMenu, setShowSubMenu] = useState(false);

	const handleToggleMenu = () => {
		setShowSubMenu((prev) => !prev);
	};

	return (
		<Fragment>
			<ListItem
				sx={{
					borderRadius: 1,
					px: 4.5,
					py: 2.5,
					mb: 2.5,
					bgcolor: "#f6f9fc",
					cursor: "pointer",
					":hover, &:has(+ .MuiList-root:hover)": {
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
				<Typography color="textSecondary" fontWeight={500}>
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

			<Fade in={showSubMenu} mountOnEnter unmountOnExit>
				<List
					disablePadding
					sx={{ bgcolor: "#f6f9fc", pb: 2, mt: -2.5, mb: 2.5 }}
				>
					{item.children.map((sub, index) => (
						<ListItem
							key={index}
							component={Link}
							href={sub.href}
							sx={{
								px: 5.5,
								borderBottom: 1,
								borderColor: "divider",
								":last-child": {
									borderBottom: 0,
								},
							}}
						>
							<ListItemText
								primary={sub.label}
								secondary={sub.description}
								sx={{ my: 0 }}
								primaryTypographyProps={{ variant: "body2", lineHeight: 1.4 }}
								secondaryTypographyProps={{
									variant: "caption",
									color: "textMuted",
								}}
							/>
						</ListItem>
					))}
				</List>
			</Fade>
		</Fragment>
	);
};

export default NavigationItem;
