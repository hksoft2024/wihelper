"use client";

import MuiBadge from "@mui/material/Badge";
import { alpha, styled } from "@mui/material/styles";

type Props = {
	size?: "small" | "medium";
	hasShadow?: boolean;
};

const Badge = styled(MuiBadge, {
	shouldForwardProp: (prop: string) => !["size", "hasShadow"].includes(prop),
})<Props>(({ theme, size = "medium", hasShadow, color = "primary" }) => ({
	...(size === "small"
		? {
				padding: theme.spacing(0.5, 1.5),
				fontSize: 12,
				lineHeight: 1.2,
		  }
		: {}),
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
