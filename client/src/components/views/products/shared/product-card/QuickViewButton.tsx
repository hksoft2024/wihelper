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
import ProductDetail from "../../detail/product-detail";

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
					<Tooltip title={t("GO_TO_PRODUCT_PAGE")} placement="right">
						<Typography
							component={Link}
							href="/products/1"
							variant="h4"
							display="inline-flex"
							alignItems="center"
							gap={2}
							sx={{ ":hover": { color: "primary.main" } }}
						>
							{product.name}

							<ArrowForwardIosIcon />
						</Typography>
					</Tooltip>
				}
				open={openModal}
				onClose={handleCloseModal}
				maxWidth="lg"
				hiddenFooter
				scroll="body"
				overflow="visible"
			>
				<ProductDetail viewType="quick-view" product={product} />
			</Dialog>
		</Fragment>
	);
};

export default QuickViewButton;
