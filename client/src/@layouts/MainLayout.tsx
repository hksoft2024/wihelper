import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import BottomNavigation from "@mui/material/BottomNavigation";
import bottomNavigationActionClasses from "@mui/material/BottomNavigationAction/bottomNavigationActionClasses";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import zIndex from "@mui/material/styles/zIndex";
import { ChildrenType } from "~/@core/types";
import Footer from "./components/main/Footer";
import TopBar from "./components/main/TopBar";
import Navbar from "./components/main/navbar";
import StyledBottomNavigationAction from "./components/main/styles/StyledBottomNavigationAction";

type Props = ChildrenType;

const MainLayout = ({ children }: Props) => {
	return (
		<Box minHeight="100vh" bgcolor="common.white">
			<Box component="header">
				<TopBar />
				<Navbar />
			</Box>

			<Box component="main">{children}</Box>

			<Footer />

			<Paper
				sx={{
					position: "fixed",
					bottom: 0,
					left: 0,
					right: 0,
					zIndex: zIndex.tooltip,
					display: { xs: "block", lg: "none" },
				}}
				elevation={3}
			>
				<BottomNavigation
					showLabels
					sx={{
						[`& .${bottomNavigationActionClasses.root}`]: {
							borderRight: 1,
							borderColor: "divider",
							":last-child": {
								borderRight: 0,
							},
						},
					}}
				>
					<StyledBottomNavigationAction
						label="Appointment"
						icon={<AccessTimeOutlinedIcon sx={{ mb: 0.5 }} />}
					/>

					<StyledBottomNavigationAction
						label="Shop"
						icon={<StorefrontOutlinedIcon sx={{ mb: 0.5 }} />}
					/>

					<StyledBottomNavigationAction
						label="Locations"
						icon={<LocationOnOutlinedIcon sx={{ mb: 0.5 }} />}
					/>
				</BottomNavigation>
			</Paper>
		</Box>
	);
};

export default MainLayout;
