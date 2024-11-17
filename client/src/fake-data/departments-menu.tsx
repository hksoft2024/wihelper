import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { DepartmentsMenuItemType } from "~/types/navigation";

export const DEPARTMENTS_MENU: DepartmentsMenuItemType[] = [
	{
		label: "Common Conditions",
		startIcon: (
			<FavoriteBorderOutlinedIcon
				fontSize="small"
				sx={{ transition: (theme) => theme.transitions.create(["fill"]) }}
			/>
		),
		children: {
			heading: "Foot & Ankle Disorders",
			href: "#",
			image_url: "/images/shop/departments/condition.png",
			start_price: "$149.80",
			data: [
				{ label: "Achilles Tendon", href: "#" },
				{ label: "Arthritis", href: "#" },
				{ label: "Back Pain", href: "#" },
				{ label: "Bunions", href: "#" },
				{ label: "Diabetes", href: "#" },
				{ label: "Flat Feet", href: "#" },
				{ label: "Foot Pain", href: "#" },
				{ label: "Gout", href: "#" },
				{ label: "Haglund's Deformity", href: "#" },
				{ label: "Hallux-rigidus", href: "#" },
				{ label: "Hammer Toes", href: "#" },
				{ label: "Heel Pain", href: "#" },
				{ label: "Heel Spurs", href: "#" },
				{ label: "Hip Pain", href: "#" },
				{ label: "Knee Pain", href: "#" },
				{ label: "Metatarsalgia", href: "#" },
				{ label: "Morton's Neuroma", href: "#" },
				{ label: "Neuropathy", href: "#" },
				{ label: "Overpronation", href: "#" },
				{ label: "Plantar Fasciitis", href: "#" },
				{ label: "Swollen Feet & Edema", href: "#" },
			],
		},
	},
	{
		label: "Footwear",
		children: {
			heading: "Men, Women & Kids",
			href: "#",
			image_url: "/images/shop/departments/footwear.png",
			start_price: "$127.00",
			data: [
				{ label: "Athletic Footwear", href: "#" },
				{ label: "Casual Footwear", href: "#" },
				{ label: "Formal Footwear", href: "#" },
				{ label: "Work Boots & Safety Footwear", href: "#" },
				{ label: "Outdoor & Hiking Boots", href: "#" },
				{ label: "Sandals & Flip-Flops", href: "#" },
				{ label: "Slippers & Indoor Footwear", href: "#" },
				{ label: "Orthopedic Shoes", href: "#" },
				{ label: "Dance Shoes", href: "#" },
				{ label: "Boots", href: "#" },
				{ label: "Waterproof & Water-Resistant Footwear", href: "#" },
				{ label: "Fashion Sneakers", href: "#" },
				{ label: "Medical & Therapeutic Footwear", href: "#" },
				{ label: "Children's Footwear", href: "#" },
				{ label: "Specialty Footwear", href: "#" },
				{ label: "Vegan & Eco-Friendly Footwear", href: "#" },
				{ label: "Custom and Bespoke Shoes", href: "#" },
			],
		},
	},
	{
		label: "Socks",
		children: {
			href: "#",
			image_url: "/images/shop/departments/sock.png",
			start_price: "$210.00",
			data: [
				{ label: "Arch Support Inserts", href: "#" },
				{ label: "Cushioning Insoles", href: "#" },
				{ label: "Heel Cups & Inserts", href: "#" },
				{ label: "Orthopedic Shoe Inserts", href: "#" },
				{ label: "Metatarsal Pads & Inserts", href: "#" },
				{ label: "Insoles for Diabetic Foot Care", href: "#" },
				{ label: "Sports & Performance Insoles", href: "#" },
				{ label: "Gel Insoles", href: "#" },
				{ label: "Arch Sleeves & Supports", href: "#" },
				{ label: "Foot Strips & Pads", href: "#" },
				{ label: "Moldable Orthotics", href: "#" },
				{ label: "Forefoot Cushions & Inserts", href: "#" },
				{ label: "Elevated Heel Inserts", href: "#" },
				{ label: "Custom Functional Orthotics", href: "#" },
				{ label: "Silicone Heel Cups", href: "#" },
			],
		},
	},
];
