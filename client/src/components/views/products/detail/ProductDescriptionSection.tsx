"use client";

import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import svgIconClasses from "@mui/material/SvgIcon/svgIconClasses";
import Tab from "@mui/material/Tab";
import tabsClasses from "@mui/material/Tabs/tabsClasses";
import Typography from "@mui/material/Typography";
import { Fragment, SyntheticEvent, useState } from "react";
import ClothesDryIcon from "~/components/ui/icons/ClothesDry";
import HandWashIcon from "~/components/ui/icons/HandWash";
import IroningIcon from "~/components/ui/icons/Ironing";
import NoBleachIcon from "~/components/ui/icons/NoBleach";
import WashIcon from "~/components/ui/icons/Wash";

const StyledTab = styled(Tab)(({ theme }) => ({
	minWidth: 0,
	padding: theme.spacing(3.5, 5),
	transition: theme.transitions.create(["color"]),
	[`.${svgIconClasses.root}`]: {
		fontSize: 26,
	},
}));

const StyledTabPanel = styled(TabPanel)(({ theme }) => ({
	padding: 0,
	marginTop: theme.spacing(4),
}));

enum WashingInstruction {
	Wash,
	NoBleach,
	HandWash,
	Iron,
	Dry,
}

const ProductDescriptionSection = () => {
	const [selectedTab, setSelectedTab] = useState<WashingInstruction>(
		WashingInstruction.Wash
	);

	const handleChangeTab = (_: SyntheticEvent, newTab: WashingInstruction) => {
		setSelectedTab(newTab);
	};

	return (
		<Fragment>
			<Box py={4}>
				<Grid container spacing={7.5} direction={{ xs: "column", md: "row" }}>
					<Grid
						size={{ xs: 12, md: 6, lg: 5 }}
						offset={{ lg: 1 }}
						order={{ md: 2 }}
					>
						<Box borderRadius={2}>
							<img src="/images/shop/single/prod-img.jpg" alt="" />
						</Box>
					</Grid>
					<Grid
						size={{ xs: 12, md: 6, lg: 4 }}
						offset={{ lg: 1 }}
						order={{ md: 1 }}
					>
						<Box px={{ xs: 0, lg: 3.75 }} py={6}>
							<Box>
								<Typography variant="h3" pb={2} mb={6}>
									High quality materials
								</Typography>
								<Typography variant="h6" mb={4}>
									Soft cotton blend
								</Typography>
								<Typography variant="body2" color="textMuted" pb={2} mb={4}>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Duis aute irure dolor in reprehenderit.
								</Typography>
							</Box>

							<Stack gap={4}>
								<Typography variant="h6">Washing instructions</Typography>
								<TabContext value={selectedTab}>
									<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
										<TabList
											onChange={handleChangeTab}
											sx={{
												[`.${tabsClasses.flexContainer}`]: {
													flexWrap: "wrap",
												},
											}}
										>
											<StyledTab
												value={WashingInstruction.Wash}
												icon={<WashIcon />}
											/>
											<StyledTab
												value={WashingInstruction.NoBleach}
												icon={<NoBleachIcon />}
											/>
											<StyledTab
												value={WashingInstruction.HandWash}
												icon={<HandWashIcon />}
											/>
											<StyledTab
												value={WashingInstruction.Iron}
												icon={<IroningIcon />}
											/>
											<StyledTab
												value={WashingInstruction.Dry}
												icon={<ClothesDryIcon />}
											/>
										</TabList>
									</Box>
									<Fade
										in={selectedTab === WashingInstruction.Wash}
										mountOnEnter
										unmountOnExit
									>
										<StyledTabPanel value={WashingInstruction.Wash}>
											<Typography variant="body2" color="textMuted">
												30° mild machine washing
											</Typography>
										</StyledTabPanel>
									</Fade>
									<Fade
										in={selectedTab === WashingInstruction.NoBleach}
										mountOnEnter
										unmountOnExit
									>
										<StyledTabPanel value={WashingInstruction.NoBleach}>
											<Typography variant="body2" color="textMuted">
												Do not use any bleach
											</Typography>
										</StyledTabPanel>
									</Fade>
									<Fade
										in={selectedTab === WashingInstruction.HandWash}
										mountOnEnter
										unmountOnExit
									>
										<StyledTabPanel value={WashingInstruction.HandWash}>
											<Typography variant="body2" color="textMuted">
												Hand wash normal (30°)
											</Typography>
										</StyledTabPanel>
									</Fade>
									<Fade
										in={selectedTab === WashingInstruction.Iron}
										mountOnEnter
										unmountOnExit
									>
										<StyledTabPanel value={WashingInstruction.Iron}>
											<Typography variant="body2" color="textMuted">
												Low temperature ironing
											</Typography>
										</StyledTabPanel>
									</Fade>
									<Fade
										in={selectedTab === WashingInstruction.Dry}
										mountOnEnter
										unmountOnExit
									>
										<StyledTabPanel value={WashingInstruction.Dry}>
											<Typography variant="body2" color="textMuted">
												Do not dry clean
											</Typography>
										</StyledTabPanel>
									</Fade>
								</TabContext>
							</Stack>
						</Box>
					</Grid>
				</Grid>
			</Box>
			<Box py={12}>
				<Grid
					container
					spacing={{ xs: 6, md: 7.5 }}
					direction={{ xs: "column", md: "row" }}
				>
					<Grid size={{ xs: 12, md: 6, lg: 5 }} offset={{ lg: 1 }}>
						<Box borderRadius={2}>
							<img src="/images/shop/single/prod-map.png" alt="" />
						</Box>
					</Grid>
					<Grid size={{ xs: 12, md: 6, lg: 4 }} offset={{ lg: 1 }}>
						<Box pt={{ md: 6 }} pb={0}>
							<Typography variant="h3" pb={2} mb={6}>
								Where is it made?
							</Typography>
							<Typography variant="h6" mb={4}>
								Apparel Manufacturer, Ltd.
							</Typography>
							<Typography variant="body2" color="textMuted" pb={2} mb={4}>
								​Sam Tower, 6 Road No 32, Dhaka 1875, Bangladesh
							</Typography>
							<Stack direction="row" alignItems="center" gap={8} mb={6}>
								<Stack alignItems="center" gap={1}>
									<Typography variant="h2" color="secondary">
										3258
									</Typography>
									<Typography>Workers</Typography>
								</Stack>
								<Stack alignItems="center" gap={1}>
									<Typography variant="h2" color="secondary">
										43%
									</Typography>
									<Typography>Female</Typography>
								</Stack>
								<Stack alignItems="center" gap={1}>
									<Typography variant="h2" color="secondary">
										57%
									</Typography>
									<Typography>Male</Typography>
								</Stack>
							</Stack>
							<Typography variant="h6" mb={4}>
								Factory information
							</Typography>
							<Typography variant="body2" color="textMuted" pb={2} mb={4}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore.
							</Typography>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</Fragment>
	);
};

export default ProductDescriptionSection;
