import styled from "@mui/material/styles/styled";

type Props = {
	position?: "relative" | "absolute";
	size?: number;
};

const CarouselNavigationButton = styled("button", {
	shouldForwardProp: (prop) => !["position", "size"].includes(prop.toString()),
})<Props>(({ theme, position = "absolute", size = 44 }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "#fff",
	height: size,
	width: size,
	padding: theme.spacing(2),
	border: `1px solid ${theme.palette.divider}`,
	borderRadius: "50%",
	cursor: "pointer",
	...(position === "absolute"
		? { position: "absolute", top: "50%", zIndex: 2 }
		: {}),
	transition: theme.transitions.create(["background-color"]),
	"&.swiper-button-disabled": {
		backgroundColor: theme.palette.action.hover,
		cursor: "default",
	},
}));

export default CarouselNavigationButton;
