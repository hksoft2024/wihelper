"use client";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";
import { useState } from "react";
import ColorCheckbox from "~/components/ui/ColorCheckbox";

const colors = [
	{ id: 1, name: "Blue-gray", code: "#b3c8db" },
	{ id: 2, name: "Burgundy", code: "#ca7295" },
	{ id: 3, name: "Teal", code: "#91c2c3" },
	{ id: 4, name: "Brown", code: "#9a8480" },
	{ id: 5, name: "Coral red", code: "#ff7072" },
	{ id: 6, name: "Navy", code: "#696dc8" },
	{ id: 7, name: "Charcoal", code: "#4e4d4d" },
	{ id: 8, name: "Sky blue", code: "#8bcdf5" },
];

const ColorWidget = () => {
	const t = useTranslations();

	const [selectColors, setSelectColors] = useState<string[]>([]);

	return (
		<Stack spacing={4.5}>
			<Typography variant="h4">{t("COLOR")}</Typography>

			<Stack direction="row" flexWrap="wrap">
				{colors.map((color) => (
					<ColorCheckbox
						key={color.id}
						colorCode={color.code}
						colorName={color.name}
						checked={selectColors.includes(color.code)}
						onChange={(checked) =>
							setSelectColors(
								checked
									? [...selectColors, color.code]
									: selectColors.filter((colorCode) => colorCode !== color.code)
							)
						}
					/>
				))}
			</Stack>
		</Stack>
	);
};

export default ColorWidget;
