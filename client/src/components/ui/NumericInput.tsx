import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Divider from "@mui/material/Divider";
import InputAdornment from "@mui/material/InputAdornment";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { ChangeEventHandler, ForwardedRef, forwardRef, ReactNode } from "react";

type Props = {
	value?: number;
	onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
	onBlur?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
	error?: boolean;
	helperText?: ReactNode;
	disabled?: boolean;
	onIncrease?: () => void;
	onDecrease?: () => void;
};

const StyledIconButton = styled("div")(({ theme }) => ({
	flex: 1,
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	p: 0.5,
	borderLeft: `1px solid ${theme.palette.divider}`,
	cursor: "pointer",
	transition: theme.transitions.create(["color"]),
	":hover": { color: theme.palette.primary.main },
}));

const StyledInput = styled(TextField)({
	"input::-webkit-outer-spin-button, input::-webkit-inner-spin-button": {
		WebkitAppearance: "none",
	},
	input: {
		MozAppearance: "textfield",
	},
});

const NumericInput = forwardRef(
	(
		{ onIncrease, onDecrease, ...props }: Props,
		ref: ForwardedRef<HTMLDivElement>
	) => {
		return (
			<StyledInput
				{...props}
				type="number"
				ref={ref}
				slotProps={{
					input: {
						endAdornment: (
							<InputAdornment position="end" sx={{ mr: -3.5, maxHeight: 1 }}>
								<Stack height={1} divider={<Divider />}>
									<StyledIconButton onClick={onIncrease}>
										<AddIcon sx={{ fontSize: 16 }} />
									</StyledIconButton>
									<StyledIconButton onClick={onDecrease}>
										<RemoveIcon sx={{ fontSize: 16 }} />
									</StyledIconButton>
								</Stack>
							</InputAdornment>
						),
					},
				}}
			/>
		);
	}
);

export default NumericInput;
