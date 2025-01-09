import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";
import Button from "~/@core/components/mui/Button";
import FieldGroup from "~/components/ui/FieldGroup";

const ReviewForm = () => {
	const t = useTranslations();

	return (
		<form>
			<Card elevation={0} sx={{ bgcolor: "#f6f9fc" }}>
				<CardContent sx={{ p: 7.5, ":last-child": { pb: 7.5 } }}>
					<Typography variant="h4" pb={2} mb={3}>
						{t("WRITE_A_REVIEW")}
					</Typography>
					<Stack spacing={4}>
						<FieldGroup label={t("YOUR_NAME")} required>
							<TextField
								slotProps={{ input: { sx: { bgcolor: "#fff" } } }}
								helperText={
									<Typography variant="caption" color="textMuted">
										{t("WILL_BE_DISPLAYED_ON_THE_COMMENT")}
									</Typography>
								}
							/>
						</FieldGroup>
						<FieldGroup label={t("YOUR_EMAIL")} required>
							<TextField
								slotProps={{ input: { sx: { bgcolor: "#fff" } } }}
								helperText={
									<Typography variant="caption" color="textMuted">
										{t("AUTHENTICATION_ONLY_WE_WONT_SPAM_YOU")}
									</Typography>
								}
							/>
						</FieldGroup>
						<FieldGroup label={t("RATING")} required>
							<Select value="" sx={{ bgcolor: "#fff" }} displayEmpty fullWidth>
								<MenuItem value="">{t("CHOOSE_RATING")}</MenuItem>
								<MenuItem value="5">
									{t("AMOUNT_STARS", { amount: 5 })}
								</MenuItem>
								<MenuItem value="4">
									{t("AMOUNT_STARS", { amount: 4 })}
								</MenuItem>
								<MenuItem value="3">
									{t("AMOUNT_STARS", { amount: 3 })}
								</MenuItem>
								<MenuItem value="2">
									{t("AMOUNT_STARS", { amount: 2 })}
								</MenuItem>
								<MenuItem value="1">
									{t("AMOUNT_STARS", { amount: 1 })}
								</MenuItem>
							</Select>
						</FieldGroup>
						<FieldGroup label={t("REVIEW")} required>
							<TextField
								slotProps={{ input: { sx: { bgcolor: "#fff" } } }}
								multiline
								rows={6}
								helperText={
									<Typography variant="caption" color="textMuted">
										{t("SUBJECT_AT_LEAST_CHARACTERS", {
											subject: t("YOUR_REVIEW"),
											min: 50,
										})}
									</Typography>
								}
							/>
						</FieldGroup>
						<FieldGroup label={t("PROS")}>
							<TextField
								slotProps={{ input: { sx: { bgcolor: "#fff" } } }}
								multiline
								rows={2}
								placeholder={t("SEPARATED_BY_COMMAS")}
							/>
						</FieldGroup>
						<FieldGroup label={t("CONS")}>
							<TextField
								slotProps={{ input: { sx: { bgcolor: "#fff" } } }}
								multiline
								rows={2}
								placeholder={t("SEPARATED_BY_COMMAS")}
							/>
						</FieldGroup>
						<Box>
							<Button fullWidth hasShadow size="large" sx={{ mt: 2 }}>
								{t("SUBMIT_A_REVIEW")}
							</Button>
						</Box>
					</Stack>
				</CardContent>
			</Card>
		</form>
	);
};

export default ReviewForm;
