import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import Image from "~/components/ui/Image";
import Loader from "~/components/ui/Loader";
import { ProductMediaPreview } from "~/types/product";

type Props = {
	mediaPreviews: ProductMediaPreview[];
};

type StyledMediaPreviewProps = {
	isActive: boolean;
};

const StyledMediaPreview = styled("div", {
	shouldForwardProp: (prop) => prop !== "isActive",
})<StyledMediaPreviewProps>(({ theme, isActive }) => ({
	width: 80,
	height: 80,
	cursor: "pointer",
	opacity: isActive ? 1 : 0.6,
	border: `1px solid ${theme.palette.divider}`,
	borderRadius: theme.spacing(1),
	borderColor: isActive ? theme.palette.primary.main : theme.palette.divider,
	transition: theme.transitions.create(["opacity", "border-color"]),
	":hover": { opacity: 1 },
}));

const ProductGallery = ({ mediaPreviews }: Props) => {
	const [activeMediaPreview, setActiveMediaPreview] =
		useState<ProductMediaPreview>(mediaPreviews[0]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(false);
	}, []);

	return (
		<Stack
			direction={{ xs: "column-reverse", sm: "row" }}
			alignItems={{ xs: "center", sm: "start" }}
		>
			<List
				disablePadding
				sx={{
					maxHeight: 400,
					maxWidth: 1,
					overflow: "auto",
					my: { xs: 1.25, sm: 2.5 },
					mr: { xs: 1.25, sm: 2.5 },
					display: { xs: "flex", sm: "block" },
					pr: { xs: 0, sm: 1 },
					pb: { xs: 1, sm: 0 },
				}}
				className="scrollbar"
			>
				{mediaPreviews.map((media, index) => (
					<ListItem
						key={index}
						disablePadding
						sx={{
							mb: { sm: 2.5 },
							mr: { xs: 2.5, sm: 0 },
							":last-child": { mb: 0, mr: 0 },
						}}
					>
						<StyledMediaPreview
							isActive={activeMediaPreview.url === media.url}
							onClick={() => setActiveMediaPreview(media)}
						>
							{media.type === "image" ? (
								<Image
									src={media.url}
									alt=""
									containerSx={{ width: 1, height: 1 }}
								/>
							) : (
								<Box component="video" src={media.url} width={1} height={1} />
							)}
						</StyledMediaPreview>
					</ListItem>
				))}
			</List>

			<Box flex={1} width={1} height={1} ml={{ sm: 2.5 }} mt={2.5}>
				{isLoading ? (
					<Loader scope="component" height={300} />
				) : activeMediaPreview.type === "image" ? (
					<InnerImageZoom
						src={activeMediaPreview.url}
						zoomSrc={activeMediaPreview.url}
						zoomType="hover"
						zoomPreload
						hideHint
					/>
				) : (
					<Box
						component="video"
						src={activeMediaPreview.url}
						width={1}
						controls
					/>
				)}
			</Box>
		</Stack>
	);
};

export default ProductGallery;
