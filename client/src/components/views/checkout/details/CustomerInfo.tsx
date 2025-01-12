import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Avatar from "@mui/material/Avatar";
import badgeClasses from "@mui/material/Badge/badgeClasses";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { getTranslations } from "next-intl/server";
import Badge from "~/@core/components/mui/Badge";

const CustomerInfo = async () => {
	const t = await getTranslations();

	return (
		<Card elevation={0} sx={{ bgcolor: "#f6f9fc", p: 6 }}>
			<Stack
				direction="row"
				alignItems="center"
				justifyContent="space-between"
				flexWrap="wrap"
				gap={4}
			>
				<Stack direction="row" alignItems="center" spacing={4}>
					<Badge
						variant="rounded"
						badgeContent={384}
						color="warning"
						max={999}
						sx={{
							[`.${badgeClasses.badge}`]: {
								top: 5,
								right: 20,
							},
						}}
					>
						<Box
							border={1}
							borderColor="divider"
							borderRadius="50%"
							p={1.25}
							bgcolor="#fff"
						>
							<Avatar
								src="/images/shop/account/avatar.jpg"
								alt="Remy Sharp"
								sx={{ width: 90, height: 90 }}
							/>
						</Box>
					</Badge>

					<Stack>
						<Typography component="h3" fontWeight={500}>
							Susan Gardner
						</Typography>
						<Typography variant="body2" color="secondary">
							s.gardner@example.com
						</Typography>
					</Stack>
				</Stack>

				<Button
					startIcon={<EditOutlinedIcon />}
					sx={{
						bgcolor: "#fff",
						color: "text.primary",
						boxShadow: "0 .5rem 1.125rem -0.5rem rgba(0,0,0,.15)",
					}}
				>
					{t("EDIT_PROFILE")}
				</Button>
			</Stack>
		</Card>
	);
};

export default CustomerInfo;
