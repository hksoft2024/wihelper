import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "~/@core/components/mui/Button";
import { PURCHASE_PRODUCTS } from "~/fake-data/home-page";
import ProductCard from "./ProductCard";

const PurchaseProducts = () => {
	return (
		<Box component="section">
			<Container>
				<Box pt={12} mb={6}>
					<Stack
						direction="row"
						alignItems="center"
						justifyContent="space-between"
						gap={2}
						pt={1}
						pb={6}
						mb={6}
						borderBottom={1}
						borderColor="divider"
					>
						<Typography variant="h2" pt={4}>
							Purchase products
						</Typography>

						<Button
							variant="outlined"
							color="secondary"
							endIcon={<KeyboardArrowRightIcon />}
						>
							More products
						</Button>
					</Stack>

					<Grid container spacing={4}>
						{PURCHASE_PRODUCTS.map((product, index) => (
							<Grid key={index} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
								<ProductCard product={product} />
							</Grid>
						))}
					</Grid>
				</Box>
			</Container>
		</Box>
	);
};

export default PurchaseProducts;
