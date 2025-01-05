"use client";

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";
import { useState } from "react";

const PriceWidget = () => {
	const t = useTranslations();

	const [priceRange, setPriceRange] = useState([0, 100]);

	const handleChangePriceRange = (newRange: number | number[]) => {
		setPriceRange(newRange as number[]);
	};

	const handleChangePriceInput = (value: number, index: number) => {
		const clonedRange = [...priceRange];

		clonedRange[index] = value;

		handleChangePriceRange(clonedRange);
	};

	return (
		<Stack spacing={4.5}>
			<Typography variant="h4">{t("PRICE")}</Typography>

			<Stack>
				<Box my={10}>
					<Slider
						value={priceRange}
						onChange={(_, newRange) => handleChangePriceRange(newRange)}
						valueLabelDisplay="auto"
						valueLabelFormat={(value) => `$${value}`}
					/>
				</Box>

				<Stack
					direction="row"
					gap={3}
					divider={<Typography fontSize={24}>~</Typography>}
				>
					{priceRange.map((price, index) => (
						<Stack key={index} direction="row">
							<Box
								display="flex"
								alignItems="center"
								justifyContent="center"
								border={1}
								borderRight={0}
								borderColor="divider"
								px={4}
								py={1.5}
								fontSize={14}
								sx={(theme) => ({
									borderTopLeftRadius: theme.shape.borderRadius,
									borderBottomLeftRadius: theme.shape.borderRadius,
								})}
							>
								$
							</Box>

							<TextField
								value={price}
								onChange={(e) =>
									handleChangePriceInput(Number(e.target.value), index)
								}
								slotProps={{
									input: {
										sx: {
											borderTopLeftRadius: 0,
											borderBottomLeftRadius: 0,
										},
									},
									htmlInput: { sx: { fontSize: 14 } },
								}}
							/>
						</Stack>
					))}
				</Stack>
			</Stack>
		</Stack>
	);
};

export default PriceWidget;
