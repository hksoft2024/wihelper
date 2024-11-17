"use client";

import Box from "@mui/material/Box";
import { Theme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
import React from "react";
import themeConfig from "~/configs/themeConfig";
import { Link } from "~/i18n/routing";

const Logo = () => {
	const isMobile = useMediaQuery<Theme>((theme) =>
		theme.breakpoints.down("sm")
	);

	return (
		<Box
			component={Link}
			href={themeConfig.home_page_url}
			height={1}
			display="flex"
			alignItems="center"
			py={2.5}
			position="relative"
		>
			<Image
				src={isMobile ? "/images/app/logo-icon.png" : "/images/app/logo.png"}
				alt="wiHelper"
				width="0"
				height="0"
				sizes="100vw"
				style={{ width: isMobile ? 40 : 142, height: "auto" }}
				priority
			/>
		</Box>
	);
};

export default Logo;
