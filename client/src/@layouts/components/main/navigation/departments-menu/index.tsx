"use client";

import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import Fade from "@mui/material/Fade";
import List from "@mui/material/List";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import Stack from "@mui/material/Stack";
import zIndex from "@mui/material/styles/zIndex";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";
import { Fragment, MouseEvent, useRef, useState } from "react";
import { DEPARTMENTS_MENU } from "~/fake-data/departments-menu";
import DepartmentsMenuItem from "./DepartmentsMenuItem";

const DepartmentsMenu = () => {
	const t = useTranslations();

	const parentRef = useRef<HTMLDivElement | null>(null);

	const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

	const handleShowMenu = (e: MouseEvent<HTMLElement>) => {
		setAnchorEl(e.currentTarget);
	};

	const handleHideMenu = () => {
		setAnchorEl(null);
	};

	return (
		<Stack
			direction="row"
			alignItems="center"
			pt={4.5}
			pr={4.5}
			pb={3.5}
			sx={{
				cursor: "pointer",
				":hover": {
					"& > .MuiSvgIcon-root": {
						fill: (theme) => theme.palette.primary.main,
					},
					"& > .MuiTypography-root": {
						color: "primary.main",
					},
				},
			}}
			onMouseEnter={handleShowMenu}
			onMouseLeave={handleHideMenu}
		>
			<StorefrontOutlinedIcon
				fontSize="small"
				color="action"
				sx={{
					mb: 1,
					mr: 2,
					transition: (theme) => theme.transitions.create(["fill"]),
				}}
			/>
			<Typography color="textSecondary">{t("SHOP")}</Typography>
			<ArrowDropDownOutlinedIcon
				fontSize="small"
				sx={(theme) => ({
					color: theme.palette.text.secondary,
					transition: theme.transitions.create(["fill"]),
				})}
			/>

			<Popper
				ref={parentRef}
				open={!!anchorEl}
				anchorEl={anchorEl}
				transition
				placement="bottom-start"
				sx={{ zIndex: zIndex.tooltip }}
				disablePortal
			>
				{({ TransitionProps }) => (
					<Fragment>
						<Fade {...TransitionProps}>
							<Paper
								elevation={1}
								sx={{ minWidth: 200, animation: "slide-up 250ms ease-in-out" }}
							>
								<List>
									{DEPARTMENTS_MENU.map((item, index) => (
										<DepartmentsMenuItem
											key={index}
											item={item}
											parent={parentRef.current}
										/>
									))}
								</List>
							</Paper>
						</Fade>
					</Fragment>
				)}
			</Popper>
		</Stack>
	);
};

export default DepartmentsMenu;
