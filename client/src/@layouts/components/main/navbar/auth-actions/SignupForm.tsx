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
import authSchemas from "~/validations/authSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterPayload } from "~/types/auth";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { register } from "~/actions/authActions";
import Alert from "@mui/material/Alert";

type Props = AuthFormProps;
const SignupForm = ({ onStart, onFinish, onSuccess }: Props) => {
	const t = useTranslations();

	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	const {
		control,
		handleSubmit,
		formState: { errors, isSubmitting },
		setError,
	} = useForm<RegisterPayload>({
		resolver: zodResolver(authSchemas(t).registerSchema),
		defaultValues: {
			first_name: "",
			last_name: "",
			user_name: "",
			password: "",
			password_confirm: "",
			app_name: "Patients",
		},
	});

	const handleToggleShowPassword = () => {
		setShowPassword((prev) => !prev);
	};

	const handleToggleShowConfirmPassword = () => {
		setShowConfirmPassword((prev) => !prev);
	};

	const handleRegister: SubmitHandler<RegisterPayload> = async (data) => {
		onStart();

		const res = await register(data);

		onFinish();

		if (res.is_succeeded) {
			onSuccess();
		} else {
			setError("root", { message: res.message, type: "server" });
		}
	};

	return (
		<Fade in mountOnEnter unmountOnExit>
			<form onSubmit={handleSubmit(handleRegister)}>
				<Grid container spacing={4}>
					{!!errors.root && (
						<Grid size={{ xs: 12 }}>
							<Alert severity="error">{errors.root.message}</Alert>
						</Grid>
					)}

					<Grid size={{ xs: 12 }}>
						<Controller
							name="first_name"
							control={control}
							disabled={isSubmitting}
							render={({ field }) => (
								<FieldGroup label={t("FIRST_NAME")}>
									<TextField
										{...field}
										placeholder="John"
										error={!!errors.first_name}
										helperText={errors.first_name?.message}
									/>
								</FieldGroup>
							)}
						/>
					</Grid>
					<Grid size={{ xs: 12 }}>
						<Controller
							name="last_name"
							control={control}
							disabled={isSubmitting}
							render={({ field }) => (
								<FieldGroup label={t("LAST_NAME")}>
									<TextField
										{...field}
										placeholder="Doe"
										error={!!errors.last_name}
										helperText={errors.last_name?.message}
									/>
								</FieldGroup>
							)}
						/>
					</Grid>
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
							disabled={isSubmitting}
							render={({ field }) => (
								<FieldGroup label={t("PASSWORD")}>
									<TextField
										{...field}
										type={showPassword ? "text" : "password"}
										error={!!errors.password}
										helperText={errors.password?.message}
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
							)}
						/>
					</Grid>
					<Grid size={{ xs: 12 }}>
						<Controller
							name="password_confirm"
							control={control}
							disabled={isSubmitting}
							render={({ field }) => (
								<FieldGroup label={t("CONFIRM_PASSWORD")}>
									<TextField
										{...field}
										type={showConfirmPassword ? "text" : "password"}
										error={!!errors.password_confirm}
										helperText={errors.password_confirm?.message}
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
							)}
						/>
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
							{t("SIGN_UP")}
						</LoadingButton>
					</Grid>
				</Grid>
			</form>
		</Fade>
	);
};

export default SignupForm;
