"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import { alpha } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { FOOTER_BLOCK_1, FOOTER_BLOCK_2 } from "~/fake-data/footer";
import { Link } from "~/i18n/routing";

const Footer = () => {
	return (
		<Box component="footer" pt={12} bgcolor="background.dark">
			<Container>
				<Grid container spacing={7.5}>
					<Grid size={{ xs: 12, sm: 6, md: 4 }}>
						{FOOTER_BLOCK_1.map((data, index) => (
							<Box key={index} mb={6}>
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
							<Box key={index} mb={6}>
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
						<Box mb={6}>
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
					<Grid container spacing={7.5}>
						<Grid size={{ xs: 12, md: 6 }}>
							<Stack mb={8} alignItems={{ xs: "center", md: "unset" }}>
								<Box display="flex" mb={8}>
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
								>
									<Typography
										variant="body2"
										component={Link}
										href="#"
										color={alpha("#fff", 0.65)}
										sx={{ ":hover": { bgcolor: "#fff" } }}
									>
										Accessibility
									</Typography>
									<Typography
										variant="body2"
										component={Link}
										href="#"
										color={alpha("#fff", 0.65)}
										sx={{ ":hover": { bgcolor: "#fff" } }}
									>
										Policy & Privacy
									</Typography>
									<Typography
										variant="body2"
										component={Link}
										href="#"
										color={alpha("#fff", 0.65)}
										sx={{ ":hover": { bgcolor: "#fff" } }}
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
											"& svg": {
												transition: (theme) =>
													theme.transitions.create(["fill"]),
											},
											":hover": {
												bgcolor: "#fff",
												"& svg": { fill: "#3b5998" },
											},
										}}
									>
										<svg
											fill="#fff"
											width={16}
											height={16}
											viewBox="-7 -2 24 24"
											xmlns="http://www.w3.org/2000/svg"
											preserveAspectRatio="xMinYMin"
											className="jam jam-facebook"
										>
											<path d="M2.046 3.865v2.748H.032v3.36h2.014v9.986H6.18V9.974h2.775s.26-1.611.386-3.373H6.197V4.303c0-.343.45-.805.896-.805h2.254V0H6.283c-4.34 0-4.237 3.363-4.237 3.865z" />
										</svg>
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
											"& svg path": {
												transition: (theme) =>
													theme.transitions.create(["fill"]),
											},
											":hover": {
												bgcolor: "#fff",
												"& svg path": { fill: "red" },
											},
										}}
									>
										<svg
											width={16}
											height={16}
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M22.54 6.42a2.765 2.765 0 0 0-1.945-1.957C18.88 4 12 4 12 4s-6.88 0-8.595.463A2.765 2.765 0 0 0 1.46 6.42C1 8.148 1 11.75 1 11.75s0 3.602.46 5.33a2.765 2.765 0 0 0 1.945 1.958C5.121 19.5 12 19.5 12 19.5s6.88 0 8.595-.462a2.765 2.765 0 0 0 1.945-1.958c.46-1.726.46-5.33.46-5.33s0-3.602-.46-5.33ZM9.75 8.479v6.542l5.75-3.271-5.75-3.271Z"
												fill="#fff"
											/>
										</svg>
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
