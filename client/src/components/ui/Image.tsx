import Box from "@mui/material/Box";
import { SxProps, Theme } from "@mui/material/styles";
import { SystemStyleObject } from "@mui/system/styleFunctionSx";
import NextImage from "next/image";

type Props = {
	src: string;
	alt: string;
	containerSx?: SxProps<Theme>;
	imageSx?: SystemStyleObject;
	onClick?: () => void;
};

const Image = ({ src, alt, containerSx, imageSx, onClick }: Props) => {
	return (
		<Box
			display="flex"
			minWidth={0}
			minHeight={0}
			position="relative"
			sx={{
				...containerSx,
				img: {
					...imageSx,
					objectFit: "cover",
				},
			}}
			onClick={onClick}
		>
			<NextImage src={src} alt={alt} fetchPriority="high" fill sizes="auto" />
		</Box>
	);
};

export default Image;
