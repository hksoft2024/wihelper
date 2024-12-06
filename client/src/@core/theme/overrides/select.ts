import { Theme } from "@mui/material/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const select: Theme["components"] = {
	MuiSelect: {
		defaultProps: {
			IconComponent: KeyboardArrowDownIcon,
			MenuProps: {
				disableAutoFocusItem: true,
			},
		},
	},
};

export default select;
