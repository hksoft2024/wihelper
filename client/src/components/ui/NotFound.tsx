"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const NotFound = () => {
	return (
		<Stack
			height="100vh"
			display="flex"
			alignItems="center"
			justifyContent="center"
		>
			<Stack alignItems="center" gap={2}>
				<Typography variant="h1">404</Typography>
				<Typography variant="h4">Page Not Found ⚠️</Typography>
				<Typography>
					We couldn&#39;t find the page you are looking for.
				</Typography>
			</Stack>

			<Box mt={5}>
				<Button href="/" component={Link} variant="contained">
					Back to Home
				</Button>
			</Box>
		</Stack>
	);
};

export default NotFound;
