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
					borderRadius: theme.shape.borderRadius,
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
