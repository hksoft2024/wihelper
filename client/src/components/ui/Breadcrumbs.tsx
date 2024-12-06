"use client";

import { SvgIconComponent } from "@mui/icons-material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import MuiBreadcrumbs from "@mui/material/Breadcrumbs";
import MuiLink from "@mui/material/Link";
import { alpha } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";
import { useMemo } from "react";
import { Link } from "~/i18n/routing";

export type Breadcrumb = {
	label: string;
	href?: string;
	icon?: SvgIconComponent;
};

type Props = {
	breadcrumbs: Breadcrumb[];
	color?: "white" | "black";
};

const Breadcrumbs = ({ breadcrumbs, color = "white" }: Props) => {
	const t = useTranslations();

	const memorizedBreadcrumbs = useMemo<Breadcrumb[]>(
		() => [
			{ label: t("HOME"), href: "/", icon: HomeOutlinedIcon },
			...breadcrumbs,
		],
		[t, breadcrumbs]
	);

	return (
		<MuiBreadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
			{memorizedBreadcrumbs.map(({ icon: Icon, label, href }, index) =>
				href ? (
					<MuiLink
						key={index}
						component={Link}
						underline="none"
						sx={{ display: "flex", alignItems: "center", fontSize: 14 }}
						color={color}
						href={href}
					>
						{!!Icon && <Icon sx={{ mr: 0.5 }} fontSize="small" />}
						{label}
					</MuiLink>
				) : (
					<Typography
						key={index}
						variant="body2"
						color={alpha(color === "white" ? "#fff" : "#000", 0.6)}
						display="flex"
						alignItems="center"
					>
						{!!Icon && <Icon sx={{ mr: 0.5 }} fontSize="small" />}
						{label}
					</Typography>
				)
			)}
		</MuiBreadcrumbs>
	);
};

export default Breadcrumbs;
