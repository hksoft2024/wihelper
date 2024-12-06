import Checkbox from "@mui/material/Checkbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";
import DebouncedSearchBox from "~/components/ui/DebouncedSearchBox";

const brands = [
	{ id: 1, name: "Adidas", count: 100 },
	{ id: 2, name: "LV", count: 1576 },
	{ id: 3, name: "Gucci", count: 231 },
	{ id: 4, name: "Nike", count: 756 },
	{ id: 5, name: "Puma", count: 1524 },
];

const BrandWidget = () => {
	const t = useTranslations();

	return (
		<Stack spacing={4.5}>
			<Typography variant="h4">{t("BRAND")}</Typography>

			<Stack spacing={2}>
				<DebouncedSearchBox
					onSearch={(value) => console.log(value)}
					fontSize={14}
					placeholder={t("SEARCH")}
				/>

				<List
					disablePadding
					className="scrollbar"
					sx={{
						pt: 1,
						pl: 3,
						pr: 4,
						maxHeight: 192,
						overflow: "auto",
					}}
				>
					{brands.map((brand) => (
						<ListItem
							key={brand.id}
							disableGutters
							disablePadding
							sx={{ mb: 1.5 }}
						>
							<ListItemIcon sx={{ minWidth: 0, mr: 1 }}>
								<Checkbox
									id={`brand-${brand.id}`}
									edge="start"
									disableRipple
									size="small"
									sx={{ p: 0.5 }}
								/>
							</ListItemIcon>

							<ListItemText
								primary={brand.name}
								sx={{ my: 0 }}
								primaryTypographyProps={{
									variant: "body2",
									color: "textSecondary",
									component: "label",
									htmlFor: `brand-${brand.id}`,
									display: "inline-block",
									sx: { cursor: "pointer" },
								}}
							/>

							<Typography variant="caption" color="textMuted">
								{brand.count}
							</Typography>
						</ListItem>
					))}
				</List>
			</Stack>
		</Stack>
	);
};

export default BrandWidget;
