import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import { Fragment } from "react";
import ReviewItem, { Review } from "./ReviewItem";

const REVIEWS: Review[] = [
	{
		reviewer: {
			avatar_url: "https://picsum.photos/200",
			full_name: "Rafael Marquez",
		},
		created_at: "June 28, 2019",
		rating: 4,
		review_helpfulness_percentage: 83,
		content:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla non dolorem aspernatur sequi sapiente quae explicabo nostrum tempora unde quam. Modi eius aperiam minus sed, facere ipsum assumenda odio quod?",
		likes_count: 15,
		dislikes_count: 3,
		pros: ["Consequuntur magni", "voluptatem sequi", "tempora"],
		cons: ["Architecto beatae", "quis autem"],
	},
	{
		reviewer: {
			avatar_url: "https://picsum.photos/200",
			full_name: "Barbara Palson",
		},
		created_at: "May 17, 2019",
		rating: 5,
		review_helpfulness_percentage: 99,
		content:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla non dolorem aspernatur sequi sapiente quae explicabo nostrum tempora unde quam. Modi eius aperiam minus sed, facere ipsum assumenda odio quod?",
		likes_count: 34,
		dislikes_count: 1,
		pros: ["Consequuntur magni", "voluptatem sequi", "tempora"],
		cons: ["Architecto beatae", "quis autem"],
	},
	{
		reviewer: {
			avatar_url: "https://picsum.photos/200",
			full_name: "Daniel Adams",
		},
		created_at: "May 8, 2019",
		rating: 3,
		review_helpfulness_percentage: 75,
		content:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla non dolorem aspernatur sequi sapiente quae explicabo nostrum tempora unde quam. Modi eius aperiam minus sed, facere ipsum assumenda odio quod?",
		likes_count: 26,
		dislikes_count: 9,
		pros: ["Consequuntur magni", "voluptatem sequi", "tempora"],
		cons: ["Architecto beatae", "quis autem"],
	},
];

const ReviewList = () => {
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
				{REVIEWS.map((review, index) => (
					<ReviewItem key={index} review={review} />
				))}
			</Stack>
		</Fragment>
	);
};

export default ReviewList;
