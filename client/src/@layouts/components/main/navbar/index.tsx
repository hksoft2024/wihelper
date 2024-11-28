"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { Theme } from "@mui/material/styles";
import zIndex from "@mui/material/styles/zIndex";
import useMediaQuery from "@mui/material/useMediaQuery";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { useState } from "react";
import Logo from "~/@core/components/Logo";
import Navigation from "../navigation";
import NavigationMobile from "../navigation-mobile";
import SearchBox from "./SearchBox";
import Toolbar from "./Toolbar";

const Navbar = () => {
	const [openNavigationMobile, setOpenNavigationMobile] = useState(false);
	const [showNavigation, setShowNavigation] = useState(false);

	const isMobile = useMediaQuery<Theme>((theme) =>
		theme.breakpoints.down("lg")
	);

	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 500,
	});

	const handleToggleNavigation = () => {
		if (isMobile) {
			setOpenNavigationMobile((prev) => !prev);
		} else {
			setShowNavigation((prev) => !prev);
		}
	};

	return (
		<Stack
			bgcolor="background.paper"
			sx={{
				...(trigger && !isMobile
					? {
							position: "fixed",
							top: 0,
							left: 0,
							right: 0,
							zIndex: zIndex.appBar,
							boxShadow: 1,
							animation:
								"slide-down 250ms ease-in-out, fade-in 250ms ease-in-out",
					  }
					: {}),
			}}
		>
			<Box py={3}>
				<Container>
					<Stack
						direction="row"
						alignItems="center"
						justifyContent={{ xs: "space-between", lg: "unset" }}
						gap={6}
					>
						<Box mr={4}>
							<Logo />
						</Box>
						<Box flex={1} display={{ xs: "none", lg: "block" }}>
							<SearchBox />
						</Box>
						<Toolbar
							onToggleNavigation={handleToggleNavigation}
							hideToggleMenuButton={!trigger && !isMobile}
						/>
					</Stack>

					{isMobile && <NavigationMobile open={openNavigationMobile} />}
				</Container>
			</Box>

			{(showNavigation || !trigger) && <Navigation />}
		</Stack>
	);
};

export default Navbar;
