import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import DepartmentsMenu from "./departments-menu";
import NavigationMenu from "./navigation-menu";

const Navigation = () => {
	return (
		<Box
			bgcolor="background.paper"
			pb={2}
			mt={-2}
			display={{ xs: "none", lg: "block" }}
		>
			<Container>
				<Stack direction="row" alignItems="center">
					<DepartmentsMenu />

					<Divider
						flexItem
						orientation="vertical"
						variant="middle"
						sx={{ my: 3.5, mx: 2 }}
					/>

					<NavigationMenu />
				</Stack>
			</Container>
		</Box>
	);
};

export default Navigation;
