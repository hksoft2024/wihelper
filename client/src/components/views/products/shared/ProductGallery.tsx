import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import { PRODUCT_GALLERY } from "~/fake-data/product";
import InnerImageZoom from "react-inner-image-zoom";

const ProductGallery = () => {
	const [activeImageUrl, setActiveImageUrl] = useState(
		PRODUCT_GALLERY[0].image_url
	);

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
				{PRODUCT_GALLERY.map((gallery, index) => (
					<Box
						key={index}
						width={80}
						height={80}
						border={1}
						borderColor={
							activeImageUrl === gallery.image_url ? "primary.main" : "divider"
						}
						borderRadius={1}
						sx={(theme) => ({
							cursor: "pointer",
							opacity: activeImageUrl === gallery.image_url ? 1 : 0.6,
							transition: theme.transitions.create(["opacity", "border-color"]),
							":hover": {
								opacity: 1,
							},
						})}
						onClick={() => setActiveImageUrl(gallery.image_url)}
					>
						<img src={gallery.thumbnail_url} alt="" />
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
