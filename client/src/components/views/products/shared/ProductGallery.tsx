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

const ProductGallery = ({ mediaPreviews }: Props) => {
	const [activeImageUrl, setActiveImageUrl] = useState(mediaPreviews[0].url);
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
				}}
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
						<Image
							src={media.url}
							alt=""
							containerSx={{
								width: 80,
								height: 80,
								cursor: "pointer",
								opacity: activeImageUrl === media.url ? 1 : 0.6,
								border: 1,
								borderRadius: 1,
								borderColor:
									activeImageUrl === media.url ? "primary.main" : "divider",
								transition: (theme) =>
									theme.transitions.create(["opacity", "border-color"]),
								":hover": { opacity: 1 },
							}}
							onClick={() => setActiveImageUrl(media.url)}
						/>
					</ListItem>
				))}
			</List>

			<Box width={1} height={1} ml={{ sm: 2.5 }} mt={2.5}>
				{isLoading ? (
					<Loader scope="component" height={300} />
				) : (
					<InnerImageZoom
						src={activeImageUrl}
						zoomSrc={activeImageUrl}
						zoomType="hover"
						zoomPreload
						hideHint
					/>
				)}
			</Box>
		</Stack>
	);
};

export default ProductGallery;
