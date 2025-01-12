import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Theme } from "@mui/material/styles";

const autocomplete: Theme["components"] = {
	MuiAutocomplete: {
		defaultProps: {
			popupIcon: <KeyboardArrowDownIcon />,
		},
	},
};

export default autocomplete;
