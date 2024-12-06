import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import MuiButton from "@mui/material/Button";
import buttonClasses from "@mui/material/Button/buttonClasses";
import svgIconClasses from "@mui/material/SvgIcon/svgIconClasses";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import typographyClasses from "@mui/material/Typography/typographyClasses";
import { useTranslations } from "next-intl";
import { Fragment, useState } from "react";
import Dialog from "~/components/ui/Dialog";
import { Link } from "~/i18n/routing";
import { Product } from "~/types/product";
import ProductDetail from "../../detail/ProductDetail";

type Props = {
	product: Product;
};

const QuickViewButton = ({ product }: Props) => {
	const t = useTranslations();

	const [openModal, setOpenModal] = useState(false);

	const handleOpenModal = () => {
		setOpenModal(true);
	};

	const handleCloseModal = () => {
		setOpenModal(false);
	};

	return (
		<Fragment>
			<MuiButton
				variant="text"
				color="inherit"
				startIcon={<VisibilityOutlinedIcon />}
				sx={(theme) => ({
					[`.${buttonClasses.startIcon} .${svgIconClasses.root}`]: {
						fontSize: 16,
						fill: theme.palette.text.secondary,
						transition: (theme) => theme.transitions.create(["fill"]),
					},
					":hover": {
						bgcolor: "transparent",
						[`.${buttonClasses.startIcon} .${svgIconClasses.root}`]: {
							fill: theme.palette.primary.main,
						},
						[`> .${typographyClasses.root}`]: {
							color: "primary.main",
						},
					},
				})}
				onClick={handleOpenModal}
			>
				<Typography variant="body2" color="textSecondary">
					{t("QUICK_VIEW")}
				</Typography>
			</MuiButton>

			<Dialog
				title={
					<Tooltip title={t("QUICK_VIEW")} placement="right">
						<Typography
							component={Link}
							href="/products/1"
							fontSize={{ xs: "calc(1.275rem + 0.3vw)", xl: 24 }}
							fontWeight={500}
							display="inline-flex"
							alignItems="center"
							gap={2}
						>
							{product.name}

							<ArrowForwardIosIcon color="action" />
						</Typography>
					</Tooltip>
				}
				open={openModal}
				onClose={handleCloseModal}
				maxWidth="lg"
				hiddenFooter
			>
				<ProductDetail viewType="quick-view" />
			</Dialog>
		</Fragment>
	);
};

export default QuickViewButton;
