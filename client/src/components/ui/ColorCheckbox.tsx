import Box from "@mui/material/Box";
import FormGroup from "@mui/material/FormGroup";
import Typography from "@mui/material/Typography";

type Props = {
	colorCode: string;
	checked?: boolean;
	onChange?: (checked: boolean) => void;
	colorName?: string;
};

const ColorCheckbox = ({ colorCode, checked, onChange, colorName }: Props) => {
	const handleCheckColor = () => {
		if (onChange) {
			onChange(!checked);
		}
	};

	if (!colorCode) return null;

	return (
		<FormGroup
			sx={{
				...(colorName ? { width: 64 } : {}),
				mx: 1,
				mb: 2,
				alignItems: "center",
			}}
		>
			<Typography
				className="color-label"
				height={32}
				width={32}
				p={0.75}
				display="inline-flex"
				alignItems="center"
				justifyContent="center"
				border={1}
				borderColor={checked ? "primary.main" : "divider"}
				borderRadius={99}
				sx={{
					cursor: "pointer",
					transition: (theme) => theme.transitions.create(["border-color"]),
				}}
				onClick={handleCheckColor}
			>
				<Box
					component="span"
					width={1}
					height={1}
					bgcolor={colorCode}
					borderRadius={99}
				/>
			</Typography>

			{!!colorName && (
				<Typography
					variant="caption"
					color="textMuted"
					pt={0.5}
					sx={{ cursor: "pointer" }}
					onClick={handleCheckColor}
				>
					{colorName}
				</Typography>
			)}
		</FormGroup>
	);
};

export default ColorCheckbox;
