import { Fragment } from "react";
import StraightenOutlinedIcon from "@mui/icons-material/StraightenOutlined";
import Button from "@mui/material/Button";

const SizeGuideButton = () => {
	return (
		<Fragment>
			<Button
				variant="text"
				color="inherit"
				startIcon={
					<StraightenOutlinedIcon sx={{ transform: "rotate(180deg)" }} />
				}
				sx={{
					":hover": {
						bgcolor: "transparent",
						color: "primary.main",
					},
				}}
			>
				Size guide
			</Button>
		</Fragment>
	);
};

export default SizeGuideButton;
