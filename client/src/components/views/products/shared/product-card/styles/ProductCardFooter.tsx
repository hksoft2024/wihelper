import CardActions from "@mui/material/CardActions";
import styled from "@mui/material/styles/styled";

const ProductCardFooter = styled(CardActions)(({ theme }) => ({
	flexDirection: "column",
	alignItems: "center",
	gap: theme.spacing(2),
	padding: theme.spacing(5),
	paddingTop: 0,
	position: "absolute",
	top: "100%",
	zIndex: 1,
	width: "100%",
	backgroundColor: theme.palette.background.paper,
	boxShadow: "none",
	opacity: 0,
	pointerEvents: "none",
	borderBottomLeftRadius: 8,
	borderBottomRightRadius: 8,
	transition: theme.transitions.create(["opacity", "box-shadow"]),
}));

export default ProductCardFooter;
