import Alert from "@mui/material/Alert";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import { useTranslations } from "next-intl";
import { Fragment } from "react";
import { ProductReview } from "~/types/product";
import ReviewItem from "./ReviewItem";

type Props = {
	reviews: ProductReview[];
};

const ReviewList = ({ reviews }: Props) => {
	const t = useTranslations();

	return (
		<Fragment>
			<Stack mb={6} direction="row" justifyContent="end">
				<FormControl
					sx={{ flexDirection: "row", alignItems: "center", gap: 2 }}
				>
					<FormLabel sx={{ fontSize: 14, color: "text.muted" }}>
						Sort by:
					</FormLabel>
					<Select value="Newest" sx={{ fontSize: 14, minWidth: 130 }}>
						<MenuItem value="Newest">Newest</MenuItem>
						<MenuItem value="Oldest">Oldest</MenuItem>
						<MenuItem value="Popular">Popular</MenuItem>
						<MenuItem value="High rating">High rating</MenuItem>
						<MenuItem value="Low rating">Low rating</MenuItem>
					</Select>
				</FormControl>
			</Stack>

			<Stack divider={<Divider sx={{ my: 6 }} />}>
				{reviews.length > 0 ? (
					reviews.map((review, index) => (
						<ReviewItem key={index} review={review} />
					))
				) : (
					<Alert color="error" severity="error">
						{t("NO_REVIEWS_AVAILABLE")}
					</Alert>
				)}
			</Stack>
		</Fragment>
	);
};

export default ReviewList;
