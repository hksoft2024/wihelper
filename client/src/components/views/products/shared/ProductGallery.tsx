import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import { ProductMediaPreview } from "~/types/product";

type Props = {
	mediaPreviews: ProductMediaPreview[];
};

const ProductGallery = ({ mediaPreviews }: Props) => {
	const [activeImageUrl, setActiveImageUrl] = useState(mediaPreviews[0].url);

	return (
		<Stack
			direction={{ xs: "column-reverse", sm: "row" }}
			alignItems={{ xs: "center", sm: "start" }}
		>
			<Stack
				direction={{ xs: "row", sm: "column" }}
				justifyContent="center"
				gap={2.5}
				flexWrap={"wrap"}
				my={{ xs: 1.25, sm: 2.5 }}
				mr={{ xs: 1.25, sm: 2.5 }}
			>
				{mediaPreviews.map((media, index) => (
					<Box
						key={index}
						width={80}
						height={80}
						overflow="hidden"
						border={1}
						borderColor={
							activeImageUrl === media.url ? "primary.main" : "divider"
						}
						borderRadius={1}
						sx={(theme) => ({
							cursor: "pointer",
							opacity: activeImageUrl === media.url ? 1 : 0.6,
							transition: theme.transitions.create(["opacity", "border-color"]),
							":hover": {
								opacity: 1,
							},
							img: {
								width: 1,
								height: 1,
								objectFit: "cover",
							},
						})}
						onClick={() => setActiveImageUrl(media.url)}
					>
						<img src={media.url} alt="" />
					</Box>
				))}
			</Stack>

			<Box width={1} height={1} ml={{ sm: 2.5 }} mt={2.5}>
				<InnerImageZoom
					src={activeImageUrl}
					zoomSrc={activeImageUrl}
					zoomType="hover"
					zoomPreload
					hideHint
				/>
			</Box>
		</Stack>
	);
};

export default ProductGallery;
