import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { useTranslations } from "next-intl";

const AddWishlistButton = () => {
	const t = useTranslations();

	return (
		<Tooltip title={t("ADD_TO_WISHLIST")} placement="left">
			<IconButton
				sx={{
					bgcolor: "#f3f5f9",
					transition: (theme) => theme.transitions.create(["color"]),
					":hover": { bgcolor: "#f3f5f9", color: "primary.main" },
				}}
			>
				<FavoriteBorderOutlinedIcon sx={{ fontSize: 16 }} />
			</IconButton>
		</Tooltip>
	);
};

export default AddWishlistButton;
