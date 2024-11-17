import Badge from "@mui/material/Badge";
import { Fragment } from "react";
import { NavigationItemType } from "~/types/navigation";

export const NAVIGATION_MENU: NavigationItemType[] = [
	{
		label: "Podiatry Services",
		children: [
			{ label: "General", description: "Foot & Ankle Specialty", href: "#" },
			{
				label: "Emergency",
				description: "Swift Care for Every Step",
				href: "#",
			},
			{
				label: (
					<Fragment>
						Therapeutic diabetic shoes
						<Badge color="error" variant="rounded" sx={{ fontSize: 10, ml: 1 }}>
							MEDICARE
						</Badge>
					</Fragment>
				),
				description: "Comfort and Care for Every Diabetic Step.",
				href: "#",
			},
			{ label: "Kids", description: "Happy Feet, Healthy Steps!", href: "#" },
		],
	},
	{
		label: "Insurance & Financing",
		children: [
			{
				label: "Coverage and financial assistance",
				description: "Support for Every Step of the Way.",
				href: "#",
			},
			{
				label: "Medicare Podiatry",
				description: "Affordable Foot Care, Covered by Medicare.",
				href: "#",
			},
		],
	},
	{
		label: "What to Expect",
		children: [
			{
				label: (
					<Fragment>
						Your first visit
						<Badge color="error" variant="rounded" sx={{ fontSize: 10, ml: 1 }}>
							NEW
						</Badge>
					</Fragment>
				),
				description: "Your Health Journey Begins Here.",
				href: "#",
			},
			{
				label: "New patient forms",
				description: "Quick Start for Quality Care.",
				href: "#",
			},
		],
	},
	{
		label: "Current Offers",
		children: [
			{
				label: "Affordable podiatry",
				description: "Quality Foot Care Within Reach.",
				href: "#",
			},
		],
	},
];
