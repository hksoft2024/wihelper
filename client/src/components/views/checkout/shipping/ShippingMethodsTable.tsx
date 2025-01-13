"use client";

import Radio from "@mui/material/Radio";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import tableCellClasses from "@mui/material/TableCell/tableCellClasses";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";
import { SHIPPING_METHODS } from "~/fake-data/checkout";

type Props = {};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	padding: theme.spacing(3),
	[`&.${tableCellClasses.head}`]: {
		borderBottomColor: "#bccad9",
		borderTop: `1px solid ${theme.palette.divider}`,
	},
}));

const ShippingMethodsTable = (props: Props) => {
	const t = useTranslations();

	return (
		<TableContainer>
			<Table>
				<TableHead>
					<TableRow>
						<StyledTableCell></StyledTableCell>
						<StyledTableCell>{t("SHIPPING_METHOD")}</StyledTableCell>
						<StyledTableCell>{t("DELIVERY_TIME")}</StyledTableCell>
						<StyledTableCell>{t("HANDLING_FEE")}</StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{SHIPPING_METHODS.map((row) => (
						<TableRow key={row.id}>
							<StyledTableCell padding="checkbox">
								<Radio size="small" value={row.id} />
							</StyledTableCell>
							<StyledTableCell>
								<Typography variant="body2" fontWeight={500}>
									{row.shipping_method}
								</Typography>
								<Typography variant="body2" color="textMuted">
									{row.description}
								</Typography>
							</StyledTableCell>
							<StyledTableCell>
								<Typography variant="body2" color="textSecondary">
									{row.delivery_time}
								</Typography>
							</StyledTableCell>
							<StyledTableCell>
								<Typography variant="body2" color="textSecondary">
									${row.fee}
								</Typography>
							</StyledTableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default ShippingMethodsTable;
