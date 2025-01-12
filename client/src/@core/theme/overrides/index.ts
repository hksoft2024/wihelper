import { Theme } from "@mui/material/styles";
import accordion from "./accordion";
import autocomplete from "./autocomplete";
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
		accordion,
		autocomplete,
		badge,
		button,
		card,
		container,
		input,
		menu,
		select,
		tooltip,
		typography
	);
};

export default overrides;
