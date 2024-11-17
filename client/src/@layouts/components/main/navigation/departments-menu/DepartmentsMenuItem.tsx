import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import Stack from "@mui/material/Stack";
import { alpha } from "@mui/material/styles";
import zIndex from "@mui/material/styles/zIndex";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useState } from "react";
import { Link } from "~/i18n/routing";
import { DepartmentsMenuItemType } from "~/types/navigation";

type Props = {
	item: DepartmentsMenuItemType;
	parent: HTMLDivElement | null;
};

const DepartmentsMenuItem = ({ item, parent }: Props) => {
	const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

	const handleShowSubMenu = () => {
		setAnchorEl(parent);
	};

	const handleCloseSubMenu = () => {
		setAnchorEl(null);
	};

	return (
		<ListItem
			sx={{
				cursor: "pointer",
				pl: 5,
				pr: 2,
				py: 3,
				borderBottom: 1,
				borderColor: "divider",
				":last-child": {
					borderBottom: 0,
				},
				":hover": {
					"& .MuiSvgIcon-root": {
						fill: (theme) => theme.palette.primary.main,
					},
					"& .MuiTypography-root": {
						color: "primary.main",
					},
				},
			}}
			onMouseEnter={handleShowSubMenu}
			onMouseLeave={handleCloseSubMenu}
		>
			{!!item.startIcon && (
				<ListItemIcon sx={{ minWidth: 0, mr: 2 }}>
					{item.startIcon}
				</ListItemIcon>
			)}

			<ListItemText
				primary={item.label}
				primaryTypographyProps={{ fontSize: 14 }}
				sx={{ my: 0 }}
			/>

			<ArrowRightOutlinedIcon
				fontSize="small"
				sx={{
					ml: 1,
					transition: (theme) => theme.transitions.create(["fill"]),
				}}
			/>

			<Popper
				open={!!anchorEl}
				anchorEl={anchorEl}
				placement="right-start"
				sx={{ zIndex: zIndex.tooltip }}
			>
				<Paper elevation={1} sx={{ minWidth: 200 }}>
					<Stack direction="row" px={2}>
						<Stack width={240} maxWidth={240} px={4} py={6}>
							{!!item.children.heading && (
								<Typography variant="h6" mb={4}>
									{item.children.heading}
								</Typography>
							)}

							{item.children.data.map((sub, index) => (
								<Typography
									key={index}
									variant="body2"
									component={Link}
									href={sub.href}
									color="textSecondary"
									pb={1}
									sx={{
										mb: 2,
										":last-child": { mb: 0 },
										":hover": {
											color: "primary.main",
										},
									}}
								>
									{sub.label}
								</Typography>
							))}
						</Stack>

						<Divider flexItem orientation="vertical" sx={{ mx: 2 }} />

						<Stack alignItems="center" width={240} maxWidth={240} py={6}>
							<Box display="flex" component={Link} href={item.children.href}>
								<Image
									src={item.children.image_url}
									alt="wiHelper"
									width="0"
									height="0"
									sizes="100vw"
									style={{ width: "100%", height: "auto" }}
									priority
								/>
							</Box>

							<Typography fontSize={14} mb={4} color="textSecondary">
								Starting from{" "}
								<Typography
									component="span"
									fontWeight={500}
									fontSize="inherit"
									color="inherit"
								>
									{item.children.start_price}
								</Typography>
							</Typography>

							<Button
								LinkComponent={Link}
								href={item.children.href}
								endIcon={<KeyboardArrowRightOutlinedIcon />}
								sx={{
									"&": {
										boxShadow: (theme) =>
											`0 .5rem 1.125rem -.5rem ${alpha(
												theme.palette.primary.main,
												0.9
											)}`,
									},
								}}
							>
								See offers
							</Button>
						</Stack>
					</Stack>
				</Paper>
			</Popper>
		</ListItem>
	);
};

export default DepartmentsMenuItem;
