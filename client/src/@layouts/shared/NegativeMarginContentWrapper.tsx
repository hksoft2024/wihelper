import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Fragment } from "react";
import { ChildrenType } from "~/@core/types";
import Breadcrumbs, { Breadcrumb } from "~/components/ui/Breadcrumbs";

type Props = ChildrenType & {
	breadcrumbs: Breadcrumb[];
	title: string;
};

const NegativeMarginContentWrapper = ({
	children,
	breadcrumbs,
	title,
}: Props) => {
	return (
		<Fragment>
			<Box bgcolor="background.dark" pt={6} pb={{ xs: 22, md: 25.5 }}>
				<Container>
					<Stack
						direction={{ xs: "column-reverse", lg: "row" }}
						alignItems="center"
						justifyContent="space-between"
						py={{ xs: 2, lg: 4 }}
						gap={4}
					>
						<Typography
							component="h1"
							variant="h3"
							color="white"
							fontWeight={500}
						>
							{title}
						</Typography>

						<Breadcrumbs breadcrumbs={breadcrumbs} />
					</Stack>
				</Container>
			</Box>

			<Container sx={{ transform: "translateY(-4.875rem)" }}>
				{children}
			</Container>
		</Fragment>
	);
};

export default NegativeMarginContentWrapper;
