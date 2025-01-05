import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";
import { ProductReview } from "~/types/product";

type Props = {
	review: ProductReview;
};

const ReviewItem = ({ review }: Props) => {
	const t = useTranslations();

	const calculateHelpfulPercentage = () => {
		const totalReactions = review.likes_count + review.dislikes_count;

		return totalReactions > 0
			? Math.ceil((review.likes_count * 100) / totalReactions)
			: 0;
	};

	return (
		<Stack spacing={4}>
			<Stack direction="row" gap={8}>
				<Stack direction="row">
					<Avatar
						src={review.reviewer.avatar_url}
						sx={{ width: 50, height: 50 }}
					/>

					<Stack ml={4}>
						<Typography variant="body2" fontWeight={500}>
							{review.reviewer.name}
						</Typography>
						<Typography variant="caption" color="textMuted">
							{review.date}
						</Typography>
					</Stack>
				</Stack>

				<Stack>
					<Rating
						value={review.rating}
						readOnly
						sx={{ fontSize: 16, mt: 1, mb: 0.5 }}
					/>
					<Typography variant="caption" color="textMuted">
						{t("REVIEW_HELPFULNESS", {
							percentage: calculateHelpfulPercentage(),
						})}
					</Typography>
				</Stack>
			</Stack>
			<Stack spacing={3}>
				<Typography color="textSecondary">{review.content}</Typography>
				<Stack spacing={1}>
					<Stack direction="row" gap={1}>
						<Typography variant="body2" fontWeight={500} color="textSecondary">
							Pros:
						</Typography>
						<Typography variant="body2" color="textSecondary">
							{review.pros}
						</Typography>
					</Stack>
					<Stack direction="row" gap={1}>
						<Typography variant="body2" fontWeight={500} color="textSecondary">
							Cons:
						</Typography>
						<Typography variant="body2" color="textSecondary">
							{review.cons}
						</Typography>
					</Stack>
				</Stack>
			</Stack>
			<Stack
				direction="row"
				alignItems="center"
				divider={<Divider flexItem orientation="vertical" variant="middle" />}
			>
				<Button
					variant="text"
					startIcon={<ThumbUpOutlinedIcon color="success" />}
					sx={{
						color: "text.muted",
						":hover": {
							bgcolor: "transparent",
						},
					}}
				>
					{review.likes_count}
				</Button>
				<Button
					variant="text"
					startIcon={<ThumbDownOffAltOutlinedIcon color="error" />}
					sx={{
						color: "text.muted",
						":hover": {
							bgcolor: "transparent",
						},
					}}
				>
					{review.dislikes_count}
				</Button>
			</Stack>
		</Stack>
	);
};

export default ReviewItem;
