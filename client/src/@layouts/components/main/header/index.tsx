"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { Theme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";
import Logo from "~/@core/components/Logo";
import NavigationMobile from "../navigation-mobile";
import SearchBox from "./SearchBox";
import Toolbar from "./Toolbar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import zIndex from "@mui/material/styles/zIndex";

const Header = () => {
	const [openNavigationMobile, setOpenNavigationMobile] = useState(false);

	const isMobile = useMediaQuery<Theme>((theme) =>
		theme.breakpoints.down("lg")
	);

	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 500,
	});

	const handleToggleNavigationMobile = () => {
		setOpenNavigationMobile((prev) => !prev);
	};

	return (
		<Box
			bgcolor="background.paper"
			py={3}
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
			<Container>
				<Stack
					direction="row"
					alignItems="center"
					justifyContent={{ xs: "space-between", lg: "unset" }}
					gap={6}
				>
					<Logo />
					<Box flex={1} display={{ xs: "none", lg: "block" }}>
						<SearchBox />
					</Box>
					<Toolbar onToggleNavigationMobile={handleToggleNavigationMobile} />
				</Stack>

				{isMobile && <NavigationMobile open={openNavigationMobile} />}
			</Container>
		</Box>
	);
};

export default Header;
