import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

type ComponentLoaderProps = {
	scope: "component";
	height: number;
};

type PageLoaderProps = {
	scope: "page";
};

type Props = (ComponentLoaderProps | PageLoaderProps) & {
	size?: number;
};

const Loader = ({ size, ...props }: Props) => {
	return (
		<Box
			display="flex"
			alignItems="center"
			justifyContent="center"
			sx={{
				...(props.scope === "component"
					? { height: props.height }
					: { position: "fixed", inset: 0 }),
			}}
		>
			<CircularProgress size={size} />
		</Box>
	);
};

export default Loader;
