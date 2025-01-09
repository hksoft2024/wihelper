import IconButton from "@mui/material/IconButton";
import styled from "@mui/material/styles/styled";

const CarouselNavigationButton = styled(IconButton)(({ theme }) => ({
	backgroundColor: "#fff",
	height: 44,
	width: 44,
	padding: theme.spacing(2),
	border: `1px solid ${theme.palette.divider}`,
	borderRadius: "50%",
	position: "absolute",
	top: "50%",
	zIndex: 2,
	":hover": {
		backgroundColor: "#fff",
	},
}));

export default CarouselNavigationButton;
