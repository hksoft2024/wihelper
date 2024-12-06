import { zodResolver } from "@hookform/resolvers/zod";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import Alert from "@mui/material/Alert";
import Checkbox from "@mui/material/Checkbox";
import Fade from "@mui/material/Fade";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid2";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import LoadingButton from "~/@core/components/mui/LoadingButton";
import { login } from "~/actions/authActions";
import FieldGroup from "~/components/ui/FieldGroup";
import { Link } from "~/i18n/routing";
import { LoginPayload } from "~/types/auth";
import authSchemas from "~/validations/authSchemas";
import { AuthFormProps } from ".";

type Props = AuthFormProps;

const SigninForm = ({ onStart, onFinish, onSuccess }: Props) => {
	const t = useTranslations();

	const [showPassword, setShowPassword] = useState(false);

	const {
		control,
		handleSubmit,
		formState: { errors, isSubmitting },
		setError,
	} = useForm<LoginPayload>({
		resolver: zodResolver(authSchemas(t).loginSchema),
		defaultValues: {
			user_name: "",
			password: "",
			app_name: "Patients",
		},
	});

	const handleToggleShowPassword = () => {
		setShowPassword((prev) => !prev);
	};

	const handleLogin: SubmitHandler<LoginPayload> = async (data) => {
		onStart();

		const res = await login(data);

		onFinish();

		if (res.is_succeeded) {
			onSuccess();
		} else {
			setError("root", { message: res.message, type: "server" });
		}
	};

	return (
		<Fade in mountOnEnter unmountOnExit>
			<form autoComplete="off" onSubmit={handleSubmit(handleLogin)}>
				<Grid container spacing={4}>
					{!!errors.root && (
						<Grid size={{ xs: 12 }}>
							<Alert severity="error">{errors.root.message}</Alert>
						</Grid>
					)}

					<Grid size={{ xs: 12 }}>
						<Controller
							name="user_name"
							control={control}
							disabled={isSubmitting}
							render={({ field }) => (
								<FieldGroup label={t("EMAIL_OR_MOBILE_NUMBER")}>
									<TextField
										{...field}
										placeholder="johndoe@example.com or 1(415)600-8000"
										error={!!errors.user_name}
										helperText={errors.user_name?.message}
									/>
								</FieldGroup>
							)}
						/>
					</Grid>
					<Grid size={{ xs: 12 }}>
						<Controller
							name="password"
							control={control}
							render={({ field }) => (
								<FieldGroup label={t("PASSWORD")}>
									<TextField
										{...field}
										type={showPassword ? "text" : "password"}
										disabled={isSubmitting}
										slotProps={{
											input: {
												endAdornment: (
													<InputAdornment position="end">
														<IconButton
															size="small"
															onClick={handleToggleShowPassword}
															disabled={isSubmitting}
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
										error={!!errors.password}
										helperText={errors.password?.message}
									/>
								</FieldGroup>
							)}
						/>
					</Grid>
					<Grid size={{ xs: 12 }}>
						<Stack
							direction="row"
							alignItems="center"
							justifyContent="space-between"
							flexWrap="wrap"
						>
							<FormControlLabel
								control={<Checkbox size="small" disabled={isSubmitting} />}
								label="Remember me"
								slotProps={{
									typography: { variant: "body2", color: "textSecondary" },
								}}
							/>

							<Typography
								{...(isSubmitting ? {} : { component: Link, href: "#" })}
								variant="body2"
								color={isSubmitting ? "textDisabled" : "error"}
							>
								{t("FORGOT_PASSWORD")}?
							</Typography>
						</Stack>
					</Grid>
					<Grid size={{ xs: 12 }}>
						<LoadingButton
							type="submit"
							fullWidth
							variant="contained"
							size="large"
							hasShadow
							loading={isSubmitting}
						>
							{t("SIGN_IN")}
						</LoadingButton>
					</Grid>
				</Grid>
			</form>
		</Fade>
	);
};

export default SigninForm;
