import { Theme } from "@mui/material/styles";

const menu: Theme["components"] = {
	MuiMenu: {
		defaultProps: {
			slotProps: {
				paper: {
					sx: (theme) => ({
						mt: theme.spacing(2),
						borderRadius: theme.spacing(2),
					}),
				},
			},
		},
	},
};

export default menu;
