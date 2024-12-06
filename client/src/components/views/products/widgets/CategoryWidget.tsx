import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { svgIconClasses } from "@mui/material";
import Box, { boxClasses } from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText, { listItemTextClasses } from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import { alpha, Theme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useQuery } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import { Fragment, useState } from "react";
import { getAllCategories } from "~/actions/categoryActions";
import DebouncedSearchBox from "~/components/ui/DebouncedSearchBox";
import Loader from "~/components/ui/Loader";

const CategoryWidget = () => {
	const t = useTranslations();

	const [selectedMenu, setSelectedMenu] = useState("");

	const categoriesQuery = useQuery({
		queryKey: ["categories"],
		queryFn: async () => {
			const res = await getAllCategories();

			if (!res.is_succeeded) {
				return [];
			}

			return res.data;
		},
	});

	const toggleShowMenu = (categoryId: string) => {
		setSelectedMenu((prev) => (prev === categoryId ? "" : categoryId));
	};

	return (
		<Stack spacing={4.5}>
			<Typography variant="h4">{t("CATEGORIES")}</Typography>

			{categoriesQuery.isPending ? (
				<Loader scope="component" height={200} size={32} />
			) : (
				<List disablePadding>
					{categoriesQuery.data?.map((category) => {
						const selected = selectedMenu === category.id;

						const activeStyle = (theme: Theme) => ({
							[`> .${listItemTextClasses.root} .${listItemTextClasses.primary}`]:
								{
									color: "primary.main",
								},
							[`> .${boxClasses.root}`]: {
								bgcolor: alpha(theme.palette.primary.main, 0.1),
								[`> .${svgIconClasses.root}`]: {
									fill: theme.palette.primary.main,
								},
							},
						});

						return (
							<Fragment key={category.id}>
								<ListItem
									disableGutters
									sx={(theme) => ({
										cursor: "pointer",
										...(selected ? activeStyle(theme) : {}),
										":hover": activeStyle(theme),
									})}
									onClick={() => toggleShowMenu(category.id)}
								>
									<ListItemText
										primary={category.category_name}
										sx={{ my: 0 }}
										primaryTypographyProps={{ color: "textSecondary" }}
									/>

									<Box
										p={0.5}
										display="flex"
										alignItems="center"
										justifyContent="center"
										bgcolor="#f3f5f9"
										borderRadius={99}
										sx={(theme) => ({
											transition: theme.transitions.create([
												"background-color",
											]),
										})}
									>
										<KeyboardArrowDownIcon
											sx={(theme) => ({
												fontSize: 18,
												fill: theme.palette.text.secondary,
												transform:
													selectedMenu === category.id
														? "rotate(-180deg)"
														: "rotate(0)",
												transition: theme.transitions.create([
													"fill",
													"transform",
												]),
											})}
										/>
									</Box>
								</ListItem>
								<Collapse
									in={selectedMenu === category.id}
									mountOnEnter
									unmountOnExit
								>
									<Stack py={2.5} spacing={2}>
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
											<ListItem
												disableGutters
												disablePadding
												sx={{
													mb: 1.5,
													cursor: "pointer",
													":hover": {
														[`> .${listItemTextClasses.root} .${listItemTextClasses.primary}`]:
															{
																color: "primary.main",
															},
													},
												}}
											>
												<ListItemText
													primary="View all"
													sx={{ my: 0 }}
													primaryTypographyProps={{
														variant: "body2",
														color: "textSecondary",
													}}
												/>

												<Typography variant="caption" color="textMuted">
													2,548
												</Typography>
											</ListItem>
										</List>
									</Stack>
								</Collapse>
							</Fragment>
						);
					})}
				</List>
			)}
		</Stack>
	);
};

export default CategoryWidget;
