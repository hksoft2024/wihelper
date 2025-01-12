import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";
import { SyntheticEvent, useState } from "react";
import { Product } from "~/types/product";

type Props = {
	product: Product;
};

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
			<Accordion
				expanded={expanded === Panel.ProductInfo}
				onChange={handleChangePanel(Panel.ProductInfo)}
			>
				<AccordionSummary>
					<Typography>
						<ErrorOutlineOutlinedIcon fontSize="small" color="action" />
						{t("PRODUCT_INFO")}
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography
						component="div"
						dangerouslySetInnerHTML={{ __html: product.description }}
					/>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={expanded === Panel.ShippingOptions}
				onChange={handleChangePanel(Panel.ShippingOptions)}
			>
				<AccordionSummary>
					<Typography>
						<LocalShippingOutlinedIcon fontSize="small" color="action" />
						Shipping options
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
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
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={expanded === Panel.LocalStore}
				onChange={handleChangePanel(Panel.LocalStore)}
			>
				<AccordionSummary>
					<Typography>
						<LocationOnOutlinedIcon fontSize="small" color="action" />
						Find in local store
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
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
				</AccordionDetails>
			</Accordion>
		</Card>
	);
};

export default ProductPanels;
