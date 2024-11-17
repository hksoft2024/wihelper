"use client";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Fade from "@mui/material/Fade";
import IconButton from "@mui/material/IconButton";
import useScrollTrigger from "@mui/material/useScrollTrigger";

const ScrollTopButton = () => {
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 500,
	});

	const handleClick = () => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	};

	return (
		<Fade in={trigger}>
			<IconButton
				onClick={handleClick}
				sx={{
					p: 2.5,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					position: "fixed",
					bottom: { xs: 72, lg: 20 },
					right: trigger ? 20 : -80,
					zIndex: 999,
					bgcolor: "primary.light",
					color: "#fff",
					transition: (theme) =>
						`${theme.transitions.create([
							"opacity",
							"background-color",
							"right",
							"bottom",
						])} !important`,
					":hover": {
						bgcolor: "primary.main",
					},
				}}
			>
				<KeyboardArrowUpIcon />
			</IconButton>
		</Fade>
	);
};

export default ScrollTopButton;
