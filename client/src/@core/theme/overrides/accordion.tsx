import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import accordionClasses from "@mui/material/Accordion/accordionClasses";
import accordionSummaryClasses from "@mui/material/AccordionSummary/accordionSummaryClasses";
import { Theme } from "@mui/material/styles";
import typographyClasses from "@mui/material/Typography/typographyClasses";

const accordion: Theme["components"] = {
	MuiAccordion: {
		defaultProps: {
			disableGutters: true,
		},
		styleOverrides: {
			root: {
				[`&.${accordionClasses.expanded}::before`]: {
					opacity: 1,
				},
			},
		},
	},
	MuiAccordionSummary: {
		defaultProps: {
			expandIcon: <ExpandMoreIcon />,
		},
		styleOverrides: {
			root: ({ theme }) => ({
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
				[`.${typographyClasses.root}`]: {
					display: "flex",
					alignItems: "center",
					gap: theme.spacing(2),
					fontWeight: 500,
				},
			}),
		},
	},
	MuiAccordionDetails: {
		styleOverrides: {
			root: ({ theme }) => ({
				padding: theme.spacing(5),
				borderTop: `1px solid ${theme.palette.divider}`,
			}),
		},
	},
};

export default accordion;
