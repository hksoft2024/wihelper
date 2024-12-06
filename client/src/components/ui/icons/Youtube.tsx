import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

type Props = SvgIconProps;

const Youtube = (props: Props) => {
	return (
		<SvgIcon {...props}>
			<svg
				fill="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M22.54 6.42a2.765 2.765 0 0 0-1.945-1.957C18.88 4 12 4 12 4s-6.88 0-8.595.463A2.765 2.765 0 0 0 1.46 6.42C1 8.148 1 11.75 1 11.75s0 3.602.46 5.33a2.765 2.765 0 0 0 1.945 1.958C5.121 19.5 12 19.5 12 19.5s6.88 0 8.595-.462a2.765 2.765 0 0 0 1.945-1.958c.46-1.726.46-5.33.46-5.33s0-3.602-.46-5.33ZM9.75 8.479v6.542l5.75-3.271-5.75-3.271Z"
					fill="#fff"
				/>
			</svg>
		</SvgIcon>
	);
};

export default Youtube;
