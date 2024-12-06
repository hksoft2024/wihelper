import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import Fade from "@mui/material/Fade";
import Grid from "@mui/material/Grid2";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { useTranslations } from "next-intl";
import { useState } from "react";
import LoadingButton from "~/@core/components/mui/LoadingButton";
import FieldGroup from "~/components/ui/FieldGroup";
import { AuthFormProps } from ".";

type Props = AuthFormProps;
const SignupForm = ({ onStart, onFinish, onSuccess }: Props) => {
	const t = useTranslations();

	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	const handleToggleShowPassword = () => {
		setShowPassword((prev) => !prev);
	};

	const handleToggleShowConfirmPassword = () => {
		setShowConfirmPassword((prev) => !prev);
	};

	return (
		<Fade in mountOnEnter unmountOnExit>
			<form>
				<Grid container spacing={4}>
					<Grid size={{ xs: 12 }}>
						<FieldGroup label={t("FIRST_NAME")}>
							<TextField placeholder="John" />
						</FieldGroup>
					</Grid>
					<Grid size={{ xs: 12 }}>
						<FieldGroup label={t("LAST_NAME")}>
							<TextField placeholder="Doe" />
						</FieldGroup>
					</Grid>
					<Grid size={{ xs: 12 }}>
						<FieldGroup label={t("EMAIL_OR_MOBILE_NUMBER")}>
							<TextField placeholder="johndoe@example.com or 1(415)600-8000" />
						</FieldGroup>
					</Grid>
					<Grid size={{ xs: 12 }}>
						<FieldGroup label={t("PASSWORD")}>
							<TextField
								type={showPassword ? "text" : "password"}
								slotProps={{
									input: {
										endAdornment: (
											<InputAdornment position="end">
												<IconButton
													size="small"
													onClick={handleToggleShowPassword}
												>
													{showPassword ? (
														<VisibilityOffOutlinedIcon />
													) : (
														<VisibilityOutlinedIcon />
													)}
												</IconButton>
											</InputAdornment>
										),
									},
								}}
							/>
						</FieldGroup>
					</Grid>
					<Grid size={{ xs: 12 }}>
						<FieldGroup label={t("CONFIRM_PASSWORD")}>
							<TextField
								type={showConfirmPassword ? "text" : "password"}
								slotProps={{
									input: {
										endAdornment: (
											<InputAdornment position="end">
												<IconButton
													size="small"
													onClick={handleToggleShowConfirmPassword}
												>
													{showConfirmPassword ? (
														<VisibilityOffOutlinedIcon />
													) : (
														<VisibilityOutlinedIcon />
													)}
												</IconButton>
											</InputAdornment>
										),
									},
								}}
							/>
						</FieldGroup>
					</Grid>
					<Grid size={{ xs: 12 }}>
						<LoadingButton fullWidth variant="contained" size="large" hasShadow>
							{t("SIGN_UP")}
						</LoadingButton>
					</Grid>
				</Grid>
			</form>
		</Fade>
	);
};

export default SignupForm;
