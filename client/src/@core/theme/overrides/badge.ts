import badgeClasses from "@mui/material/Badge/badgeClasses";
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
					[`:has(> .${badgeClasses.invisible})`]: {
						borderRadius: theme.shape.borderRadius,
					},
					[`:not(:has(> .${badgeClasses.invisible})) .${badgeClasses.badge}`]: {
						borderRadius: theme.shape.borderRadius,
					},
				}),
			},
		],
		styleOverrides: {
			root: ({ ownerState, theme }) => ({
				lineHeight: 1.2,
				[`:has(> .${badgeClasses.invisible})`]: {
					...(ownerState.variant === "rounded" && {
						padding: theme.spacing(0.5, 1.875),
						fontSize: 12,
					}),
					...(ownerState.variant === "rounded" && ownerState.color === "primary"
						? {
								backgroundColor: theme.palette.primary.main,
								color: theme.palette.primary.contrastText,
						  }
						: {}),
					...(ownerState.variant === "rounded" &&
					ownerState.color === "secondary"
						? {
								backgroundColor: theme.palette.secondary.main,
								color: theme.palette.secondary.contrastText,
						  }
						: {}),
					...(ownerState.variant === "rounded" && ownerState.color === "info"
						? {
								backgroundColor: theme.palette.info.main,
								color: theme.palette.info.contrastText,
						  }
						: {}),
					...(ownerState.variant === "rounded" && ownerState.color === "warning"
						? {
								backgroundColor: theme.palette.warning.main,
								color: theme.palette.warning.contrastText,
						  }
						: {}),
					...(ownerState.variant === "rounded" && ownerState.color === "success"
						? {
								backgroundColor: theme.palette.success.main,
								color: theme.palette.success.contrastText,
						  }
						: {}),
					...(ownerState.variant === "rounded" && ownerState.color === "error"
						? {
								backgroundColor: theme.palette.error.main,
								color: theme.palette.error.contrastText,
						  }
						: {}),
				},
			}),
			badge: ({ theme, ownerState }) => ({
				fontFamily: "inherit",
				height: 18,
				...(ownerState.variant === "rounded" && {
					padding: theme.spacing(0.5, 1.875),
					fontSize: 12,
					fontWeight: 400,
				}),
			}),
		},
	},
};

export default badge;
