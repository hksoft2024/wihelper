"use client";

import MuiBadge from "@mui/material/Badge";
import { alpha, styled } from "@mui/material/styles";

type Props = {
	hasShadow?: boolean;
};

const Badge = styled(MuiBadge, {
	shouldForwardProp: (prop: string) => !["hasShadow"].includes(prop),
})<Props>(({ theme, hasShadow, color = "primary" }) => ({
	...(hasShadow && color !== "default"
		? {
				boxShadow: `${alpha(
					theme.palette[color].main,
					0.9
				)} 0px 0.5rem 1.125rem -0.275rem;`,
		  }
		: {}),
}));

export default Badge;
