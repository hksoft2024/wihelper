import SyncOutlinedIcon from "@mui/icons-material/SyncOutlined";
import Box from "@mui/material/Box";
import svgIconClasses from "@mui/material/SvgIcon/svgIconClasses";
import Typography from "@mui/material/Typography";
import typographyClasses from "@mui/material/Typography/typographyClasses";
import { useTranslations } from "next-intl";
import { Link } from "~/i18n/routing";
import { Product } from "~/types/product";

type Props = {
	product: Product;
};

const CompareButton = ({ product }: Props) => {
	const t = useTranslations();

	return (
		<Box
			component={Link}
			href={product.href}
			p={2}
			display="flex"
			alignItems="center"
			gap={1}
			className="compare-btn"
			sx={{
				":hover": {
					[`> .${svgIconClasses.root}`]: {
						fill: (theme) => theme.palette.primary.main,
					},
					[`> .${typographyClasses.root}`]: {
						color: "primary.main",
					},
				},
				opacity: 0,
				pointerEvents: "none",
				transition: (theme) => theme.transitions.create(["opacity"]),
			}}
		>
			<SyncOutlinedIcon
				sx={{
					transform: "rotate(130deg)",
					fontSize: 16,
					color: "text.secondary",
					transition: (theme) => theme.transitions.create(["fill"]),
				}}
			/>
			<Typography variant="body2" color="textSecondary">
				{t("COMPARE")}
			</Typography>
		</Box>
	);
};

export default CompareButton;
