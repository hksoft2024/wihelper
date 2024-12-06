import Card from "@mui/material/Card";
import cardActionsClasses from "@mui/material/CardActions/cardActionsClasses";
import styled from "@mui/material/styles/styled";

type Props = {
	disableHover?: boolean;
};

const ProductCardWrapper = styled(Card, {
	shouldForwardProp: (prop) => prop !== "disableHover",
})<Props>(({ theme, disableHover }) => ({
	backgroundColor: theme.palette.background.paper,
	position: "relative",
	overflow: "visible",
	borderRadius: theme.spacing(2),
	transition: theme.transitions.create(["box-shadow", "border-radius"]),
	...(!disableHover
		? {
				":hover": {
					boxShadow: theme.shadows[1],
					borderBottomLeftRadius: 0,
					borderBottomRightRadius: 0,
					[`.${cardActionsClasses.root}`]: {
						boxShadow: theme.shadows[1],
						opacity: 1,
						pointerEvents: "auto",
					},
					".compare-btn": {
						opacity: 1,
						pointerEvents: "auto",
					},
				},
		  }
		: {}),
}));

export default ProductCardWrapper;
