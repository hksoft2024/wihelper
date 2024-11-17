import { Theme } from "@mui/material/styles";
import button from "./button";
import container from "./container";
import typography from "./typography";
import input from "./input";
import badge from "./badge";

const overrides = (): Theme["components"] => {
	return Object.assign({}, badge, container, button, input, typography);
};

export default overrides;
