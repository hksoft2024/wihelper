import { Theme } from "@mui/material/styles";

declare module "@mui/material/Badge" {
	interface BadgePropsVariantOverrides {
		rounded: true;
	}
}

const badge: Theme["components"] = {
	MuiBadge: {
		variants: [
			{
				props: {
					variant: "rounded",
				},
				style: ({ theme }) => ({
					padding: theme.spacing(0.5, 1.5),
					borderRadius: theme.shape.borderRadius,
					fontSize: 12,
					lineHeight: 1.2,
				}),
			},
		],
		styleOverrides: {
			root: ({ ownerState, theme }) => ({
				...(ownerState.variant === "rounded" && ownerState.color === "primary"
					? {
							backgroundColor: theme.palette.primary.main,
							color: theme.palette.primary.contrastText,
					  }
					: {}),
				...(ownerState.variant === "rounded" && ownerState.color === "info"
					? {
							backgroundColor: theme.palette.info.main,
							color: theme.palette.info.contrastText,
					  }
					: {}),
				...(ownerState.variant === "rounded" && ownerState.color === "error"
					? {
							backgroundColor: theme.palette.error.main,
							color: theme.palette.error.contrastText,
					  }
					: {}),
			}),
		},
	},
};

export default badge;
