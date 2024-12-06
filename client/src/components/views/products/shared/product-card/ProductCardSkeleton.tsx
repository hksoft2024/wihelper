import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const ProductCardSkeleton = () => {
	return (
		<Card
			sx={{
				backgroundColor: "background.paper",
				borderRadius: 2,
			}}
		>
			<Skeleton animation="wave" variant="rectangular" height={275} />
			<CardContent sx={{ px: 5, py: 2 }}>
				<Stack spacing={0.5} mb={3}>
					<Skeleton animation="wave" variant="text" height={16} />
					<Skeleton animation="wave" variant="text" height={16} />
				</Stack>
				<Stack
					direction="row"
					alignItems="center"
					justifyContent="space-between"
				>
					<Skeleton animation="wave" variant="text" height={16} width={50} />
					<Skeleton animation="wave" variant="text" height={16} width={75} />
				</Stack>
			</CardContent>
		</Card>
	);
};

export default ProductCardSkeleton;
