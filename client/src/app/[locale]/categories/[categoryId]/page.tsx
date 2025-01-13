import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ProductsByCategoryCarousel from "~/components/views/categories/detail/ProductsByCategoryCarousel";
import ProductsByCategoryCarouselNavigation from "~/components/views/categories/detail/ProductsByCategoryCarouselNavigation";
import ShoppingContinueButton from "~/components/views/categories/detail/ShoppingContinueButton";
import productService from "~/services/productService";
import { Product } from "~/types/product";

type Props = {
	params: Promise<{ categoryId: string }>;
};

const CategoryDetailPage = async (props: Props) => {
	let products: Product[] = [];

	const res = await productService.getProducts({ PageIndex: 1, PageSize: 50 });

	if (res.is_succeeded) {
		products = res.data.items;
	}

	return (
		<Box component="section" pt={4} pb={12}>
			<Container>
				<Grid container spacing={7.5}>
					<Grid size={{ xs: 12, md: 5 }}>
						<Stack bgcolor="#f6f8fb" borderRadius={1} height={1}>
							<Stack
								direction="row"
								alignItems="start"
								justifyContent="space-between"
								p={7.5}
							>
								<Stack spacing={1}>
									<Typography variant="h3">Athletic Footwear</Typography>
									<ShoppingContinueButton />
								</Stack>
								<ProductsByCategoryCarouselNavigation />
							</Stack>
							<Box display={{ xs: "none", md: "block" }} mt="auto">
								<img
									src="/images/categories/cat-lg02.jpg"
									alt="Athletic Footwear"
								/>
							</Box>
						</Stack>
					</Grid>
					<Grid size={{ xs: 12, md: 7 }}>
						<ProductsByCategoryCarousel products={products} />
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default CategoryDetailPage;
