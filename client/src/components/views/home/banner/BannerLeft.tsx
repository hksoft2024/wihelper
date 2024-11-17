import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { BANNER_LEFT } from "~/fake-data/home-page";

const BannerLeft = () => {
	return (
		<Stack
			pt={{ xs: 6, xl: 0 }}
			gap={{ xs: 6, xl: 0 }}
			flexDirection={{ xs: "row", xl: "column" }}
			maxWidth={1}
			overflow="auto"
			sx={{
				"::-webkit-scrollbar": {
					width: 3,
					height: 3,
					bgcolor: "transparent",
				},
				"::-webkit-scrollbar-track": {
					borderRadius: 1,
					bgcolor: "transparent",
				},
				"::-webkit-scrollbar-thumb": {
					borderRadius: 1,
					bgcolor: "transparent",
				},
				":hover": {
					"::-webkit-scrollbar": {
						bgcolor: "transparent",
					},
					"::-webkit-scrollbar-track": {
						bgcolor: "#e9edf4",
					},
					"::-webkit-scrollbar-thumb": {
						bgcolor: "#aeb4be",
					},
				},
			}}
		>
			{BANNER_LEFT.map((item, index) => (
				<Stack
					key={index}
					direction="row"
					alignItems="center"
					bgcolor={item.background_color}
					borderRadius={1}
					pl={2}
					pt={2}
					mb={6}
					minWidth={256}
				>
					<Image
						src={item.image_url}
						alt="wiHelper"
						width="0"
						height="0"
						sizes="100vw"
						style={{ width: 125, maxWidth: "100%", height: "auto" }}
						priority
					/>

					<Stack px={2} py={6}>
						<Typography
							variant="h5"
							fontSize={20}
							mb={2}
							fontWeight={300}
							lineHeight={1.2}
						>
							{item.title}
						</Typography>

						<Typography
							color={item.color}
							display="flex"
							alignItems="center"
							fontSize={14}
						>
							Learn more <KeyboardArrowRightIcon />
						</Typography>
					</Stack>
				</Stack>
			))}
		</Stack>
	);
};

export default BannerLeft;
