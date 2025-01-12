"use client";

import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";
import { Fragment, useState } from "react";
import Image from "~/components/ui/Image";
import { CartItem as TCartItem } from "~/types/cart";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

type Props = {
	item: TCartItem;
	viewOnly?: boolean;
};

const CartItem = ({ item, viewOnly }: Props) => {
	const t = useTranslations();

	const [canEdit, setCanEdit] = useState(!viewOnly);

	const handleAllowEdit = () => {
		setCanEdit(true);
	};

	return (
		<Stack
			direction={{ sm: "row" }}
			alignItems="center"
			justifyContent="space-between"
			pb={4}
			my={2}
			borderBottom={1}
			borderColor="divider"
		>
			<Stack flex={1} direction={{ sm: "row" }} alignItems="center" gap={6}>
				<Image
					src={item.product_image_url}
					alt={item.product_name}
					containerSx={{ width: 160, height: 160 }}
				/>

				<Stack flex={1} pt={2} spacing={2}>
					<Typography
						component="h3"
						fontWeight={500}
						textAlign={{ xs: "center", sm: "start" }}
					>
						{item.product_name}
					</Typography>
					<Box>
						{!!item.product_brand && (
							<Stack
								direction="row"
								justifyContent={{ xs: "center", sm: "start" }}
								gap={2}
							>
								<Typography variant="body2" color="textMuted">
									{t("BRAND")}:
								</Typography>
								<Typography variant="body2" color="textSecondary">
									{item.product_brand}
								</Typography>
							</Stack>
						)}
						{!!item.product_size && (
							<Stack
								direction="row"
								justifyContent={{ xs: "center", sm: "start" }}
								gap={2}
							>
								<Typography variant="body2" color="textMuted">
									{t("SIZE")}:
								</Typography>
								<Typography variant="body2" color="textSecondary">
									{item.product_size}
								</Typography>
							</Stack>
						)}
						{!!item.product_color && (
							<Stack
								direction="row"
								justifyContent={{ xs: "center", sm: "start" }}
								gap={2}
							>
								<Typography variant="body2" color="textMuted">
									{t("COLOR")}:
								</Typography>
								<Typography variant="body2" color="textSecondary">
									{item.product_color}
								</Typography>
							</Stack>
						)}
					</Box>
					<Typography
						fontSize={18}
						color="secondary"
						textAlign={{ xs: "center", sm: "start" }}
					>
						{item.product_price}
					</Typography>
				</Stack>
			</Stack>

			<Stack
				alignItems={{ xs: "center", sm: canEdit ? "start" : "end" }}
				maxWidth={144}
				pl={{ sm: 4 }}
			>
				{canEdit ? (
					<Fragment>
						<Typography variant="body2" fontWeight={500} mb={1.5}>
							{t("QUANTITY")}
						</Typography>
						<TextField type="number" defaultValue={item.product_quantity} />
						<Box>
							<Button
								variant="text"
								startIcon={<CancelOutlinedIcon />}
								size="small"
								sx={{ px: 0, py: 3, fontSize: 14 }}
							>
								{t("REMOVE")}
							</Button>
						</Box>
					</Fragment>
				) : (
					<Fragment>
						<Stack direction="row" alignItems="center" gap={1}>
							<Typography variant="body2" color="textMuted">
								{t("QUANTITY")}:
							</Typography>
							<Typography>{item.product_quantity}</Typography>
						</Stack>
						<Box>
							<Button
								variant="text"
								startIcon={<EditOutlinedIcon />}
								size="small"
								sx={{ px: 0, py: 3, fontSize: 14 }}
								onClick={handleAllowEdit}
							>
								{t("EDIT")}
							</Button>
						</Box>
					</Fragment>
				)}
			</Stack>
		</Stack>
	);
};

export default CartItem;
