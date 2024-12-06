import queryString, { StringifiableRecord } from "query-string";

export const stringToColor = (string?: string) => {
	if (!string) return "";

	let hash = 0;
	let i;

	for (i = 0; i < string.length; i += 1) {
		hash = string.charCodeAt(i) + ((hash << 5) - hash);
	}

	let color = "#";

	for (i = 0; i < 3; i += 1) {
		const value = (hash >> (i * 8)) & 0xff;
		color += `00${value.toString(16)}`.slice(-2);
	}

	return color;
};

export const extractFirstTwoInitials = (text?: string) => {
	if (!text) return "";

	const splittedText = text.split(" ");

	return `${splittedText[0][0]}${splittedText[1][0]}`;
};

export const stringifyUrl = (url: string, query: StringifiableRecord) => {
	return queryString.stringifyUrl(
		{ url, query },
		{ skipEmptyString: true, skipNull: true }
	);
};
