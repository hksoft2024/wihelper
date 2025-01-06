"use client";

import InstagramIcon from "@mui/icons-material/Instagram";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import { alpha } from "@mui/material/styles";
import svgIconClasses from "@mui/material/SvgIcon/svgIconClasses";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import FacebookIcon from "~/components/ui/icons/Facebook";
import { FOOTER_BLOCK_1, FOOTER_BLOCK_2 } from "~/fake-data/footer";
import { Link } from "~/i18n/routing";

const Footer = () => {
	return (
		<Box
			component="footer"
			pt={12}
			pb={{ xs: 14, lg: 0 }}
			bgcolor="background.dark"
		>
			<Container>
				<Grid container spacing={7.5} sx={{ pb: 2 }}>
					<Grid size={{ xs: 12, sm: 6, md: 4 }}>
						{FOOTER_BLOCK_1.map((data, index) => (
							<Box key={index} mb={6} pb={2}>
								<Typography variant="h3" fontSize={18} mb={4.5} color="#fff">
									{data.title}
								</Typography>
								<Stack spacing={2}>
									{data.items.map((item, idx) => (
										<Typography
											key={idx}
											variant="body2"
											component={Link}
											href={item.href}
											color={alpha("#fff", 0.65)}
											sx={{
												":hover": {
													color: "#fff",
												},
											}}
										>
											{item.label}
										</Typography>
									))}
								</Stack>
							</Box>
						))}
					</Grid>
					<Grid size={{ xs: 12, sm: 6, md: 4 }}>
						{FOOTER_BLOCK_2.map((data, index) => (
							<Box key={index} mb={6} pb={2}>
								<Typography variant="h3" fontSize={18} mb={4.5} color="#fff">
									{data.title}
								</Typography>
								<Stack spacing={2}>
									{data.items.map((item, idx) => (
										<Typography
											key={idx}
											variant="body2"
											component={Link}
											href={item.href}
											color={alpha("#fff", 0.65)}
											sx={{
												":hover": {
													color: "#fff",
												},
											}}
										>
											{item.label}
										</Typography>
									))}
								</Stack>
							</Box>
						))}
					</Grid>
					<Grid size={{ xs: 12, md: 4 }}>
						<Box mb={6} pb={4}>
							<Typography variant="h3" fontSize={18} mb={4.5} color="#fff">
								Download our app
							</Typography>
							<Stack flexDirection="row" gap={2} flexWrap="wrap">
								<Box
									pl={11.5}
									pt={1.5}
									pb={2}
									pr={3.5}
									sx={{
										backgroundImage: "url(/images/app/app-store.svg)",
										backgroundRepeat: "no-repeat",
										backgroundPosition: "left 12px center",
										backgroundSize: "24px 24px",
										cursor: "pointer",
										transition: (theme) =>
											theme.transitions.create(["background-color"]),
										":hover": {
											bgcolor: "#212835",
										},
									}}
									bgcolor="background.darker"
									borderRadius={2}
								>
									<Typography variant="caption" color={alpha("#fff", 0.6)}>
										Download on the
									</Typography>
									<Typography color="#fff" lineHeight={1}>
										App Store
									</Typography>
								</Box>
								<Box
									pl={11.5}
									pt={1.5}
									pb={2}
									pr={3.5}
									sx={{
										backgroundImage: "url(/images/app/google-play.svg)",
										backgroundRepeat: "no-repeat",
										backgroundPosition: "left 12px center",
										backgroundSize: "24px 24px",
										cursor: "pointer",
										transition: (theme) =>
											theme.transitions.create(["background-color"]),
										":hover": {
											bgcolor: "#212835",
										},
									}}
									bgcolor="background.darker"
									borderRadius={2}
								>
									<Typography variant="caption" color={alpha("#fff", 0.6)}>
										Download on the
									</Typography>
									<Typography color="#fff" lineHeight={1}>
										Google Play
									</Typography>
								</Box>
							</Stack>
						</Box>
					</Grid>
				</Grid>
			</Container>
			<Box pt={12} bgcolor="background.darker">
				<Container>
					<Grid container columnSpacing={7.5}>
						<Grid size={{ xs: 12, md: 6 }}>
							<Stack mb={8} alignItems={{ xs: "center", md: "unset" }}>
								<Box display="flex" mb={6}>
									<Image
										src="/images/app/footer-logo-light.png"
										alt="wiHelper"
										width="0"
										height="0"
										sizes="100vw"
										style={{ width: 117, maxWidth: "100%", height: "auto" }}
										priority
									/>
								</Box>

								<Stack
									direction="row"
									alignItems="center"
									rowGap={2}
									columnGap={6}
									flexWrap="wrap"
									pb={2}
								>
									<Typography
										variant="body2"
										component={Link}
										href="#"
										color={alpha("#fff", 0.65)}
										sx={{ ":hover": { color: "#fff" } }}
									>
										Accessibility
									</Typography>
									<Typography
										variant="body2"
										component={Link}
										href="#"
										color={alpha("#fff", 0.65)}
										sx={{ ":hover": { color: "#fff" } }}
									>
										Policy & Privacy
									</Typography>
									<Typography
										variant="body2"
										component={Link}
										href="#"
										color={alpha("#fff", 0.65)}
										sx={{ ":hover": { color: "#fff" } }}
									>
										Terms & Conditions
									</Typography>
								</Stack>
							</Stack>
						</Grid>
						<Grid size={{ xs: 12, md: 6 }}>
							<Stack alignItems={{ xs: "center", md: "unset" }}>
								<Stack direction="row" justifyContent="end" gap={2} mb={6}>
									<Box
										width={36}
										height={36}
										display="flex"
										alignItems="center"
										justifyContent="center"
										bgcolor={alpha("#fff", 0.08)}
										borderRadius={1}
										sx={{
											cursor: "pointer",
											transition: (theme) =>
												theme.transitions.create(["background-color"]),
											":hover": {
												bgcolor: "#fff",
												[`.${svgIconClasses.root}`]: { fill: "#3b5998" },
											},
										}}
									>
										<FacebookIcon
											sx={(theme) => ({
												fontSize: 16,
												fill: "#fff",
												transition: theme.transitions.create(["fill"]),
											})}
										/>
									</Box>
									<Box
										width={36}
										height={36}
										display="flex"
										alignItems="center"
										justifyContent="center"
										bgcolor={alpha("#fff", 0.08)}
										borderRadius={1}
										sx={{
											cursor: "pointer",
											transition: (theme) =>
												theme.transitions.create(["background-color"]),
											":hover": {
												bgcolor: "#fff",
												[`.${svgIconClasses.root}`]: { fill: "#5851db" },
											},
										}}
									>
										<InstagramIcon
											sx={(theme) => ({
												fontSize: 16,
												fill: "#fff",
												transition: theme.transitions.create(["fill"]),
											})}
										/>
									</Box>
								</Stack>

								<Box display="flex" justifyContent="end" mb={6}>
									<Image
										src="/images/app/cards-alt.png"
										alt="wiHelper"
										width="0"
										height="0"
										sizes="100vw"
										style={{ width: 187, maxWidth: "100%", height: "auto" }}
										priority
									/>
								</Box>
							</Stack>
						</Grid>
					</Grid>

					<Box pb={6} textAlign={{ xs: "center", md: "unset" }}>
						<Typography variant="caption" color={alpha("#fff", 0.5)}>
							wiHelper © {new Date().getUTCFullYear()}
						</Typography>
					</Box>
				</Container>
			</Box>
		</Box>
	);
};

export default Footer;
