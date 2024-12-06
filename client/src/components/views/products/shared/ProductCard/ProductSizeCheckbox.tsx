import FormGroup from "@mui/material/FormGroup";
import Typography from "@mui/material/Typography";

type Props = {
	checked?: boolean;
	onChange?: (checked: boolean) => void;
	label: string;
};

const ProductSizeCheckbox = ({ label, checked, onChange }: Props) => {
	const handleCheckColor = () => {
		if (onChange) {
			onChange(!checked);
		}
	};

	return (
		<FormGroup
			sx={{
				mx: 1,
				mb: 2,
				alignItems: "center",
				":has(input[type=checkbox]:checked) > .color-label": {
					borderColor: "primary.main",
					color: "primary.main",
				},
			}}
		>
			<Typography
				variant="caption"
				className="color-label"
				height={32}
				width={32}
				p={0.75}
				display="inline-flex"
				alignItems="center"
				justifyContent="center"
				border={1}
				borderColor={checked ? "primary.main" : "divider"}
				borderRadius={1}
				color={checked ? "primary.main" : "text.secondary"}
				sx={{
					cursor: "pointer",
					transition: (theme) => theme.transitions.create(["border-color"]),
					":hover": { borderColor: "#c9d5e0" },
				}}
				onClick={handleCheckColor}
			>
				{label}
			</Typography>
		</FormGroup>
	);
};

export default ProductSizeCheckbox;
