"use client";

import { alpha, styled } from "@mui/material/styles";
import MuiButton from "@mui/material/Button";

type Props = {
	hasShadow?: boolean;
};

const Button = styled(MuiButton, {
	shouldForwardProp: (prop) => prop !== "hasShadow",
})<Props>(({ theme, hasShadow, color = "primary" }) => ({
	...(hasShadow && color !== "inherit"
		? {
				boxShadow: `0 .5rem 1.125rem -.5rem ${alpha(
					theme.palette[color].main,
					0.9
				)}`,
		  }
		: {}),
}));

export default Button;
