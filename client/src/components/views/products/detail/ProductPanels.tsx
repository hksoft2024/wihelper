import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Accordion from "@mui/material/Accordion";
import accordionClasses from "@mui/material/Accordion/accordionClasses";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import accordionSummaryClasses from "@mui/material/AccordionSummary/accordionSummaryClasses";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import typographyClasses from "@mui/material/Typography/typographyClasses";
import { useTranslations } from "next-intl";
import { SyntheticEvent, useState } from "react";
import { Product } from "~/types/product";

type Props = {
	product: Product;
};

const StyledAccordion = styled(Accordion)({
	[`&.${accordionClasses.expanded}::before`]: {
		opacity: 1,
	},
});

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
	padding: theme.spacing(2.5, 5),
	[`.${accordionSummaryClasses.content}`]: {
		margin: 0,
	},
	[`.${accordionSummaryClasses.expandIconWrapper}`]: {
		padding: theme.spacing(1.25),
		backgroundColor: "#f3f5f9",
		borderRadius: "50%",
	},
	":hover": {
		[`.${accordionSummaryClasses.content} .${typographyClasses.root}`]: {
			color: theme.palette.primary.main,
		},
	},
}));

const AccordionHeading = styled(Typography)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	gap: theme.spacing(2),
	fontWeight: 500,
}));

const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
	padding: theme.spacing(5),
	borderTop: `1px solid ${theme.palette.divider}`,
}));

enum Panel {
	ProductInfo,
	ShippingOptions,
	LocalStore,
}

const SHOPPING_OPTIONS = [
	{ label: "Courier", time: "2 - 4 days", price: "$26.50" },
	{ label: "Local shipping", time: "up to one week", price: "$10.00" },
	{ label: "Flat rate", time: "5 - 7 days", price: "$33.85" },
	{ label: "UPS ground shipping", time: "4 - 6 days", price: "$18.00" },
	{ label: "Local pickup from store", time: "—", price: "$0.00" },
];

const ProductPanels = ({ product }: Props) => {
	const t = useTranslations();

	const [expanded, setExpanded] = useState<Panel | false>(false);

	const handleChangePanel =
		(panel: Panel) => (_: SyntheticEvent, isExpanded: boolean) => {
			setExpanded(isExpanded ? panel : false);
		};

	return (
		<Card variant="outlined">
			<StyledAccordion
				disableGutters
				expanded={expanded === Panel.ProductInfo}
				onChange={handleChangePanel(Panel.ProductInfo)}
			>
				<StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
					<AccordionHeading>
						<ErrorOutlineOutlinedIcon fontSize="small" color="action" />
						{t("PRODUCT_INFO")}
					</AccordionHeading>
				</StyledAccordionSummary>
				<StyledAccordionDetails>
					<Typography
						component="div"
						dangerouslySetInnerHTML={{ __html: product.description }}
					/>
				</StyledAccordionDetails>
			</StyledAccordion>
			<StyledAccordion
				disableGutters
				expanded={expanded === Panel.ShippingOptions}
				onChange={handleChangePanel(Panel.ShippingOptions)}
			>
				<StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
					<AccordionHeading>
						<LocalShippingOutlinedIcon fontSize="small" color="action" />
						Shipping options
					</AccordionHeading>
				</StyledAccordionSummary>
				<StyledAccordionDetails>
					<Stack divider={<Divider sx={{ my: 2 }} />}>
						{SHOPPING_OPTIONS.map((option, index) => (
							<Stack key={index} direction="row" justifyContent="space-between">
								<Stack>
									<Typography variant="body2" fontWeight={600}>
										{option.label}
									</Typography>
									<Typography variant="body2" color="textMuted">
										{option.time}
									</Typography>
								</Stack>

								<Typography variant="body2" color="textMuted">
									{option.price}
								</Typography>
							</Stack>
						))}
					</Stack>
				</StyledAccordionDetails>
			</StyledAccordion>
			<StyledAccordion
				disableGutters
				expanded={expanded === Panel.LocalStore}
				onChange={handleChangePanel(Panel.LocalStore)}
			>
				<StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
					<AccordionHeading>
						<LocationOnOutlinedIcon fontSize="small" color="action" />
						Find in local store
					</AccordionHeading>
				</StyledAccordionSummary>
				<StyledAccordionDetails>
					<Select
						value=""
						displayEmpty
						fullWidth
						MenuProps={{
							disableAutoFocusItem: true,
						}}
					>
						<MenuItem value="">Select your country</MenuItem>
						<MenuItem value="Argentina">Argentina</MenuItem>
						<MenuItem value="Belgium">Belgium</MenuItem>
						<MenuItem value="France">France</MenuItem>
					</Select>
				</StyledAccordionDetails>
			</StyledAccordion>
		</Card>
	);
};

export default ProductPanels;
