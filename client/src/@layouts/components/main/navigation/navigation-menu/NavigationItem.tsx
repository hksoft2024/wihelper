import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import Stack from "@mui/material/Stack";
import zIndex from "@mui/material/styles/zIndex";
import Typography from "@mui/material/Typography";
import typographyClasses from "@mui/material/Typography/typographyClasses";
import { MouseEvent, useState } from "react";
import { Link } from "~/i18n/routing";
import { NavigationItemType } from "~/types/navigation";

type Props = {
	item: NavigationItemType;
};

const NavigationItem = ({ item }: Props) => {
	const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

	const handleShowMenu = (e: MouseEvent<HTMLElement>) => {
		setAnchorEl(e.currentTarget);
	};

	const handleCloseMenu = () => {
		setAnchorEl(null);
	};

	return (
		<Box
			p={4.5}
			pb={3.5}
			sx={{
				cursor: "pointer",
				":hover": {
					[`> .${typographyClasses.root}`]: {
						color: "primary.main",
					},
				},
			}}
			onMouseEnter={handleShowMenu}
			onMouseLeave={handleCloseMenu}
		>
			<Typography color="textSecondary">{item.label}</Typography>

			<Popper
				open={!!anchorEl}
				anchorEl={anchorEl}
				placement="bottom-start"
				transition
				sx={{ zIndex: zIndex.tooltip }}
				disablePortal
			>
				{({ TransitionProps }) => (
					<Fade {...TransitionProps}>
						<Paper
							elevation={1}
							sx={{ minWidth: 200, animation: "slide-up 250ms ease-in-out" }}
						>
							<Stack py={2}>
								{item.children.map((sub, index) => (
									<Stack
										key={index}
										component={Link}
										href={sub.href}
										px={5}
										py={2}
										sx={{
											borderBottom: 1,
											borderColor: "divider",
											":last-child": { borderBottom: 0 },
										}}
									>
										<Typography variant="body2">{sub.label}</Typography>
										<Typography variant="caption" color="textMuted">
											{sub.description}
										</Typography>
									</Stack>
								))}
							</Stack>
						</Paper>
					</Fade>
				)}
			</Popper>
		</Box>
	);
};

export default NavigationItem;
