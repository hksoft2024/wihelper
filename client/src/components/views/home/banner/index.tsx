import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import BannerLeft from "./BannerLeft";
import BannerRight from "./BannerRight";

const Banner = () => {
	return (
		<Box component="section" bgcolor="#f6f9fc" pt={{ xs: 6, md: 12 }} pb={6}>
			<Container sx={{ py: { xl: 2 } }}>
				<Box mx={{ xl: -4 }}>
					<Grid
						container
						spacing={4}
						sx={{
							flexDirection: { xs: "column-reverse", xl: "row" },
						}}
					>
						<Grid size={{ xs: 12, xl: 3 }}>
							<BannerLeft />
						</Grid>
						<Grid size={{ xs: 12, xl: 9 }}>
							<BannerRight />
						</Grid>
					</Grid>
				</Box>
			</Container>
		</Box>
	);
};

export default Banner;
