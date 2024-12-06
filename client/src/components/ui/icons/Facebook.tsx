import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

type Props = SvgIconProps;

const FacebookIcon = (props: Props) => {
	return (
		<SvgIcon {...props}>
			<svg
				fill="currentColor"
				viewBox="-7 -2 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M2.046 3.865v2.748H.032v3.36h2.014v9.986H6.18V9.974h2.775s.26-1.611.386-3.373H6.197V4.303c0-.343.45-.805.896-.805h2.254V0H6.283c-4.34 0-4.237 3.363-4.237 3.865z" />
			</svg>
		</SvgIcon>
	);
};

export default FacebookIcon;
