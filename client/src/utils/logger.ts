"use server";

import fs from "fs";

export const logErrorToFile = (message: string) => {
	try {
		const folderName = "logs";
		const today = new Date().toLocaleDateString("vi-VN").replace(/\//g, "_");
		const fileName = `${today}-error.log`;
		const filePath = `${folderName}/${fileName}`;

		if (!fs.existsSync(folderName)) {
			fs.mkdirSync(folderName);
		}

		if (!fs.existsSync(filePath)) {
			fs.writeFileSync(filePath, "");
		}

		fs.appendFileSync(filePath, `${message}\n`);
	} catch (error) {
		console.log(error);
	}
};
