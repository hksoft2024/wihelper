"use client";

import { alpha, styled } from "@mui/material/styles";
import MuiLoadingButton from "@mui/lab/LoadingButton";

type Props = {
	hasShadow?: boolean;
};

const LoadingButton = styled(MuiLoadingButton, {
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

export default LoadingButton;
