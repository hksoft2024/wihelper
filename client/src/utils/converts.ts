import { Option } from "~/@core/types";

export const enumToArray = <TValue>(enumObj: object) => {
	const array = Object.keys(enumObj)
		.filter((key) => isNaN(Number(key)))
		.map<Option<TValue>>((key) => ({
			label: key,
			value: enumObj[key as keyof typeof enumObj],
		}));

	return array;
};
