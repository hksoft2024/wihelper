"use client";

import Autocomplete from "@mui/material/Autocomplete";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";
import FieldGroup from "~/components/ui/FieldGroup";

type Props = {};

const CustomerAddresses = (props: Props) => {
	const t = useTranslations();

	return (
		<Stack spacing={8}>
			<Stack spacing={4} divider={<Divider />}>
				<Typography variant="h6">{t("SHIPPING_ADDRESS")}</Typography>

				<Grid container columnSpacing={7.5} rowSpacing={4}>
					<Grid size={{ xs: 12, sm: 6 }}>
						<FieldGroup label={t("FIRST_NAME")}>
							<TextField />
						</FieldGroup>
					</Grid>
					<Grid size={{ xs: 12, sm: 6 }}>
						<FieldGroup label={t("LAST_NAME")}>
							<TextField />
						</FieldGroup>
					</Grid>
					<Grid size={{ xs: 12, sm: 6 }}>
						<FieldGroup label={t("EMAIL_ADDRESS")}>
							<TextField />
						</FieldGroup>
					</Grid>
					<Grid size={{ xs: 12, sm: 6 }}>
						<FieldGroup label={t("PHONE_NUMBER")}>
							<TextField />
						</FieldGroup>
					</Grid>
					<Grid size={{ xs: 12, sm: 6 }}>
						<FieldGroup label={t("COMPANY")}>
							<TextField />
						</FieldGroup>
					</Grid>
					<Grid size={{ xs: 12, sm: 6 }}>
						<FieldGroup label={t("COUNTRY")}>
							<Autocomplete
								options={[]}
								renderInput={(params) => <TextField {...params} />}
							/>
						</FieldGroup>
					</Grid>
					<Grid size={{ xs: 12, sm: 6 }}>
						<FieldGroup label={t("CITY")}>
							<Autocomplete
								options={[]}
								renderInput={(params) => <TextField {...params} />}
							/>
						</FieldGroup>
					</Grid>
					<Grid size={{ xs: 12, sm: 6 }}>
						<FieldGroup label={t("ZIP_CODE")}>
							<TextField />
						</FieldGroup>
					</Grid>
					<Grid size={{ xs: 12, sm: 6 }}>
						<FieldGroup label={`${t("ADDRESS")} 1`}>
							<TextField />
						</FieldGroup>
					</Grid>
					<Grid size={{ xs: 12, sm: 6 }}>
						<FieldGroup label={`${t("ADDRESS")} 2`}>
							<TextField />
						</FieldGroup>
					</Grid>
				</Grid>
			</Stack>

			<Stack spacing={4} divider={<Divider />}>
				<Typography variant="h6">{t("BILLING_ADDRESS")}</Typography>

				<FormControlLabel
					control={<Checkbox size="small" defaultChecked edge="start" />}
					label={t("SAME_AS_SHIPPING_ADDRESS")}
					slotProps={{ typography: { variant: "body2" } }}
				/>
			</Stack>
		</Stack>
	);
};

export default CustomerAddresses;
