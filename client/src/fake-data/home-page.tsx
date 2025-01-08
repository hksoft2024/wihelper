import Typography from "@mui/material/Typography";
import { Product } from "~/types/product";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

export const BANNER_LEFT = [
	{
		image_url: "/images/home/banners/banner-sm01.png",
		title: (
			<Typography
				fontSize="inherit"
				fontWeight="inherit"
				lineHeight="inherit"
				component="span"
			>
				The Kids
				<br />
				& Teens
				<br />
				<Typography
					fontSize="inherit"
					component="span"
					fontWeight={500}
					lineHeight="inherit"
				>
					Feet
				</Typography>
			</Typography>
		),
		href: "#",
		color: "#42d697",
		background_color: "#42d69717",
	},
	{
		image_url: "/images/home/banners/banner-sm02.png",
		title: (
			<Typography
				fontSize="inherit"
				fontWeight="inherit"
				lineHeight="inherit"
				component="span"
			>
				The Adults
				<br />
				Feet &
				<br />
				<Typography
					fontSize="inherit"
					lineHeight="inherit"
					fontWeight={500}
					component="span"
				>
					Activity
				</Typography>
			</Typography>
		),
		href: "#",
		color: "#69b3fe",
		background_color: "#69b3fe17",
	},
	{
		image_url: "/images/home/banners/banner-sm03.png",
		title: (
			<Typography
				fontSize="inherit"
				fontWeight="inherit"
				lineHeight="inherit"
				component="span"
			>
				The Seniors
				<br />
				Unstable
				<br />
				<Typography
					fontSize="inherit"
					lineHeight="inherit"
					fontWeight={500}
					component="span"
				>
					Gait
				</Typography>
			</Typography>
		),
		href: "#",
		color: "#fea569",
		background_color: "#fea56917",
	},
];

export const BANNER_RIGHT = [
	{
		title_1: "Pain relief",
		title_2: "Get your foot",
		title_5: "or keep up with illnesses",
		button_text: "Book an Appointment",
		button_color: "primary",
		href: "#",
		image_url: "/images/home/hero-slider/01.png",
		text_animate: "slide-up",
	},
	{
		title_1: "Foot pain",
		title_2: "Easy access for",
		title_5: "& lower extremity diseases",
		button_text: "View Details",
		button_color: "info",
		href: "#",
		image_url: "/images/home/hero-slider/02.png",
		text_animate: "slide-up",
	},
	{
		title_1: "Treatment",
		title_2: "Explore the best",
		title_5: "options on the market",
		button_text: "View Details",
		button_color: "info",
		href: "#",
		image_url: "/images/home/hero-slider/03.png",
		text_animate: "slide-right",
	},
	{
		title_1: "affordable",
		title_2: "Discover your options at",
		title_5: "fees with our podiatric specialists",
		button_text: "View Details",
		button_color: "info",
		href: "#",
		image_url: "/images/home/hero-slider/04.png",
		text_animate: "grow",
	},
];

export const INFO_LIST = [
	{
		icon: (
			<AccessTimeOutlinedIcon sx={{ fontSize: 40, color: "warning.main" }} />
		),
		title: "Save Time: Fill out the forms now.",
		description:
			"Do your papers now to save time during your appointment. Print and write using these documents.",
		href: "#",
	},
	{
		icon: (
			<MonetizationOnOutlinedIcon
				sx={{ fontSize: 40, color: "success.main" }}
			/>
		),
		title: "Insurance and Financing",
		description:
			"Medi-Cal, Medicaid, and most insurance are accepted. Not insured? No issue. We will help you choose a payment plan.",
		href: "#",
	},
	{
		icon: (
			<FavoriteBorderOutlinedIcon
				sx={{ fontSize: 40, color: "secondary.main" }}
			/>
		),
		title: "Affordable Podiatry Services",
		description:
			"We provide podiatry and surgical treatments to patients of all ages. Because everyone deserves quality podiatric treatment.",
		href: "#",
	},
	{
		icon: <HomeOutlinedIcon sx={{ fontSize: 40, color: "error.main" }} />,
		title: "Locations Near You",
		description:
			"Everyone needs feet. And, with over two locations in California, our podiatry practice is right in your community.",
		href: "#",
	},
];
