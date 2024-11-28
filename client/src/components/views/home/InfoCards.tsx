import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { INFO_LIST } from "~/fake-data/home-page";

const InfoCards = () => {
	return (
		<Box component="section">
			<Grid container>
				{INFO_LIST.map((info, index) => (
					<Grid key={index} size={{ xs: 12, md: 3 }}>
						<Box py={6}>
							<Stack alignItems="center" p={5} textAlign="center">
								<Box mt={2} mb={6}>
									{info.icon}
								</Box>

								<Typography variant="h3" fontWeight={500} mb={1}>
									{info.title}
								</Typography>
								<Typography
									variant="body2"
									color="textMuted"
									mb={4}
									textAlign="center"
								>
									{info.description}
								</Typography>
							</Stack>
						</Box>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default InfoCards;
