"use client";

import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Fade from "@mui/material/Fade";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import Stack from "@mui/material/Stack";
import { alpha, styled, Theme } from "@mui/material/styles";
import zIndex from "@mui/material/styles/zIndex";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Fragment, useRef, useState } from "react";

const StyledLink = styled(Link)(({ theme }) => ({
	color: "inherit",
	fontSize: theme.spacing(3.5),
	textDecoration: "none",
	transition: theme.transitions.create(["color"]),
	":hover": {
		color: "#fff",
	},
}));

const linkList = [
	{ label: "APPOINTMENT", path: "#", icon: CalendarTodayOutlinedIcon },
	{ label: "CHAT", path: "#", icon: CommentOutlinedIcon },
	{ label: "LOCATIONS", path: "#", icon: LocationOnOutlinedIcon },
];

const TopBar = () => {
	const t = useTranslations();

	const anchorRef = useRef<HTMLDivElement>(null);

	const [openMenu, setOpenMenu] = useState(false);

	const isMobile = useMediaQuery<Theme>((theme) =>
		theme.breakpoints.down("md")
	);

	const handleToggleShowMenu = () => {
		setOpenMenu((prev) => !prev);
	};

	const handleHideMenu = (event: MouseEvent | TouchEvent) => {
		if (
			anchorRef.current &&
			anchorRef.current.contains(event.target as HTMLElement)
		) {
			return;
		}

		setOpenMenu(false);
	};

	return (
		<Stack
			height="var(--top-bar-height)"
			bgcolor="background.dark"
			color={alpha("#fff", 0.65)}
		>
			<Container sx={{ height: 1 }}>
				<Stack
					height={1}
					direction="row"
					alignItems="center"
					justifyContent="space-between"
				>
					<Stack direction="row">
						<StyledLink href="#">Español</StyledLink>

						<Divider
							orientation="vertical"
							sx={{
								mx: 4,
								borderColor: alpha("#fff", 0.12),
								display: { xs: "none", md: "block" },
							}}
							flexItem
						/>

						<Stack display={{ xs: "none", md: "flex" }} direction="row" gap={1}>
							<Typography
								color="textMuted"
								sx={{ fontSize: (theme) => theme.spacing(3.5) }}
							>
								Available operation hours at
							</Typography>
							<StyledLink href="#">1 (800) 503-0393</StyledLink>
						</Stack>
					</Stack>

					<Stack display={{ xs: "none", md: "flex" }} direction="row">
						{linkList.map(({ label, path, icon: Icon }, index) => (
							<Fragment key={index}>
								<StyledLink
									href={path}
									sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
								>
									<Icon sx={{ fontSize: 18 }} color="primary" />

									{t(label)}
								</StyledLink>

								{index !== linkList.length - 1 && (
									<Divider
										orientation="vertical"
										sx={{ mx: 4, borderColor: alpha("#fff", 0.12) }}
										flexItem
									/>
								)}
							</Fragment>
						))}
					</Stack>

					<Typography
						ref={anchorRef}
						variant="body2"
						color={alpha("#fff", 0.65)}
						onClick={handleToggleShowMenu}
						display={{ xs: "flex", md: "none" }}
						alignItems="center"
					>
						Helpful menu <ArrowDropDownOutlinedIcon fontSize="small" />
					</Typography>

					{isMobile && (
						<Popper
							open={openMenu}
							anchorEl={anchorRef.current}
							transition
							placement="bottom-end"
							sx={{
								zIndex: zIndex.tooltip,
							}}
						>
							{({ TransitionProps }) => (
								<Fade {...TransitionProps}>
									<Paper elevation={1} sx={{ mt: 1, minWidth: 160 }}>
										<ClickAwayListener onClickAway={handleHideMenu}>
											<List>
												{linkList.map(({ label, path, icon: Icon }, index) => (
													<ListItem
														key={index}
														component={Link}
														href={path}
														sx={{
															px: 5,
															py: 1.5,
															":hover": {
																"& .MuiListItemIcon-root .MuiSvgIcon-root": {
																	fill: (theme) => theme.palette.primary.main,
																},
																"& .MuiListItemText-root .MuiTypography-root": {
																	color: "primary.main",
																},
															},
														}}
													>
														<ListItemIcon sx={{ minWidth: 0, mr: 2 }}>
															<Icon
																sx={(theme) => ({
																	fontSize: 16,
																	fill: theme.palette.text.secondary,
																	transition: theme.transitions.create([
																		"fill",
																	]),
																})}
															/>
														</ListItemIcon>

														<ListItemText
															primary={t(label)}
															sx={{ my: 0 }}
															primaryTypographyProps={{ variant: "body2" }}
														/>
													</ListItem>
												))}
											</List>
										</ClickAwayListener>
									</Paper>
								</Fade>
							)}
						</Popper>
					)}
				</Stack>
			</Container>
		</Stack>
	);
};

export default TopBar;
