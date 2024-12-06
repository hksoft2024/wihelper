import { Theme } from "@mui/material/styles";
import badge from "./badge";
import button from "./button";
import card from "./card";
import container from "./container";
import input from "./input";
import menu from "./menu";
import select from "./select";
import tooltip from "./tooltip";
import typography from "./typography";

const overrides = (): Theme["components"] => {
	return Object.assign(
		{},
		badge,
		container,
		button,
		input,
		typography,
		tooltip,
		select,
		menu,
		card
	);
};

export default overrides;
