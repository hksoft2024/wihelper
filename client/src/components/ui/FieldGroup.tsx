import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid2";
import { ReactNode } from "react";

type Props = {
	children: ReactNode;
	label: ReactNode;
	fullWidth?: boolean;
	required?: boolean;
	direction?: "column" | "row";
	isText?: boolean;
};

const FieldGroup = ({
	children,
	label,
	fullWidth,
	direction = "column",
	required,
}: Props) => {
	const isColumnDirection = direction === "column";

	return (
		<Grid container spacing={1} alignItems="center">
			<Grid size={{ xs: 12, lg: isColumnDirection ? 12 : 2 }}>
				<FormLabel
					sx={{
						fontWeight: 500,
						fontSize: 14,
						mn: 1.5,
						".MuiFormLabel-asterisk": { color: "red" },
					}}
					required={required}
				>
					{label}
				</FormLabel>
			</Grid>

			<Grid size={{ xs: 12, lg: isColumnDirection ? 12 : fullWidth ? 10 : 6 }}>
				{children}
			</Grid>
		</Grid>
	);
};

export default FieldGroup;
