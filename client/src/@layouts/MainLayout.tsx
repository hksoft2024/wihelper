import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { ChildrenType } from "~/@core/types";
import ScrollTopButton from "~/components/ui/ScrollTopButton";
import Footer from "./components/main/Footer";
import TopBar from "./components/main/TopBar";
import Header from "./components/main/header";
import Navigation from "./components/main/navigation";

type Props = ChildrenType;

const MainLayout = ({ children }: Props) => {
	return (
		<Box minHeight="100vh" bgcolor="common.white">
			<ScrollTopButton />

			<Box component="header">
				<TopBar />
				<Header />
				<Navigation />
			</Box>

			<Box component="main">{children}</Box>

			<Footer />

			<Paper
				sx={{
					position: "fixed",
					bottom: 0,
					left: 0,
					right: 0,
					display: { xs: "block", lg: "none" },
				}}
				elevation={3}
			>
				<BottomNavigation
					showLabels
					sx={{
						"& .MuiBottomNavigationAction-root": {
							borderRight: 1,
							borderColor: "divider",
							":last-child": {
								borderRight: 0,
							},
						},
					}}
				>
					<BottomNavigationAction
						label="Appointment"
						icon={<CalendarTodayOutlinedIcon fontSize="small" sx={{ mb: 1 }} />}
						sx={{ maxWidth: "unset", color: "text.muted" }}
					/>

					<BottomNavigationAction
						label="Shop"
						icon={<StorefrontOutlinedIcon fontSize="small" sx={{ mb: 1 }} />}
						sx={{ maxWidth: "unset", color: "text.muted" }}
					/>

					<BottomNavigationAction
						label="Locations"
						icon={<LocationOnOutlinedIcon fontSize="small" sx={{ mb: 1 }} />}
						sx={{ maxWidth: "unset", color: "text.muted" }}
					/>
				</BottomNavigation>
			</Paper>
		</Box>
	);
};

export default MainLayout;
