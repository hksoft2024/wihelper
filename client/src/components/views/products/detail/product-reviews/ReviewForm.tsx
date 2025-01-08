import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "~/@core/components/mui/Button";
import FieldGroup from "~/components/ui/FieldGroup";

const ReviewForm = () => {
	return (
		<form>
			<Card elevation={0} sx={{ bgcolor: "#f6f9fc" }}>
				<CardContent sx={{ p: 7.5, ":last-child": { pb: 7.5 } }}>
					<Typography variant="h4" pb={2} mb={3}>
						Write a review
					</Typography>
					<Stack spacing={4}>
						<FieldGroup label="Your name" required>
							<TextField
								slotProps={{ input: { sx: { bgcolor: "#fff" } } }}
								helperText={
									<Typography variant="caption" color="textMuted">
										Will be displayed on the comment.
									</Typography>
								}
							/>
						</FieldGroup>
						<FieldGroup label="Your email" required>
							<TextField
								slotProps={{ input: { sx: { bgcolor: "#fff" } } }}
								helperText={
									<Typography variant="caption" color="textMuted">
										Authentication only - we won't spam you.
									</Typography>
								}
							/>
						</FieldGroup>
						<FieldGroup label="Rating" required>
							<Select value="" sx={{ bgcolor: "#fff" }} displayEmpty fullWidth>
								<MenuItem value="">Choose rating</MenuItem>
								<MenuItem value="5">5 stars</MenuItem>
								<MenuItem value="4">4 stars</MenuItem>
								<MenuItem value="3">3 stars</MenuItem>
								<MenuItem value="2">2 stars</MenuItem>
								<MenuItem value="1">1 star</MenuItem>
							</Select>
						</FieldGroup>
						<FieldGroup label="Review" required>
							<TextField
								slotProps={{ input: { sx: { bgcolor: "#fff" } } }}
								multiline
								rows={6}
								helperText={
									<Typography variant="caption" color="textMuted">
										Your review must be at least 50 characters.
									</Typography>
								}
							/>
						</FieldGroup>
						<FieldGroup label="Pros">
							<TextField
								slotProps={{ input: { sx: { bgcolor: "#fff" } } }}
								multiline
								rows={2}
								placeholder="Separated by commas"
							/>
						</FieldGroup>
						<FieldGroup label="Cons">
							<TextField
								slotProps={{ input: { sx: { bgcolor: "#fff" } } }}
								multiline
								rows={2}
								placeholder="Separated by commas"
							/>
						</FieldGroup>
						<Box>
							<Button fullWidth hasShadow size="large" sx={{ mt: 2 }}>
								Submit a review
							</Button>
						</Box>
					</Stack>
				</CardContent>
			</Card>
		</form>
	);
};

export default ReviewForm;
