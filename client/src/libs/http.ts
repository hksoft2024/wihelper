/* eslint-disable @typescript-eslint/no-explicit-any */

import { getLocale } from "next-intl/server";
import { auth } from "~/auth";
import { redirect } from "~/i18n/routing";
import { HttpResponse } from "~/types/common";
import { logErrorToFile } from "~/utils/logger";
import { stringifyUrl } from "~/utils/string";

type ApiClassification = "identity" | "data";

type RequestMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

type RequestOptions = Omit<RequestInit, "method"> & {
	apiClassification: ApiClassification;
	baseUrl?: string;
	withAuth?: boolean;
	query?: any;
};

const request = async <TData = unknown>(
	method: RequestMethod,
	url: string,
	options: RequestOptions
): Promise<HttpResponse<TData>> => {
	const locale = await getLocale();

	let baseUrl = "";

	switch (options.apiClassification) {
		case "identity":
			baseUrl = process.env.IDENTITY_API_URL!;

			break;
		case "data":
			baseUrl = process.env.DATA_API_URL!;

			break;
		default:
			break;
	}

	if (options.baseUrl) {
		baseUrl = options.baseUrl;
	}

	let baseHeaders: RequestInit["headers"] = {
		"Content-Type": "application/json",
		"Accept-Language": locale,
	};

	let accessToken: string | undefined = "";
	let tokenType: string | undefined = "";

	if (options.withAuth) {
		const session = await auth();
		accessToken = session?.user.access_token;
		tokenType = session?.user.token_type;

		baseHeaders = {
			...baseHeaders,
			Authorization: `${tokenType} ${accessToken}`,
		};
	}

	if (options.body) {
		options.body = JSON.stringify(options.body);
	}

	const fullUrl = url.startsWith("/")
		? `${baseUrl}${url}`
		: `${baseUrl}/${url}`;

	const stringifyFullUrl = stringifyUrl(fullUrl, options.query);

	const res = await fetch(stringifyFullUrl, {
		cache: "no-cache",
		...options,
		method,
		headers: {
			...baseHeaders,
			...options.headers,
		},
	});

	const data = await res.json();

	if (!data.is_succeeded) {
		const content = [
			method,
			stringifyFullUrl,
			data.code,
			options.body ? JSON.stringify(options.body) : "",
			`"${data.message}"`,
		].join(" ");

		logErrorToFile(content);

		if (data.code === 401 && !url.startsWith("/logins")) {
			redirect({ href: "/", locale });
		}
	}

	return data;
};

const http = {
	get: async <TData>(url: string, options: Omit<RequestOptions, "body">) => {
		return await request<TData>("GET", url, options);
	},
	post: async <TData>(
		url: string,
		payload: any,
		options: Omit<RequestOptions, "body">
	) => {
		return await request<TData>("POST", url, {
			...options,
			body: payload,
		});
	},
	put: async <TData>(
		url: string,
		payload: any,
		options: Omit<RequestOptions, "body">
	) => {
		return await request<TData>("PUT", url, { ...options, body: payload });
	},
	patch: async <TData>(
		url: string,
		payload: any,
		options: Omit<RequestOptions, "body">
	) => {
		return await request<TData>("PATCH", url, { ...options, body: payload });
	},
	delete: async <TData>(url: string, options: Omit<RequestOptions, "body">) => {
		return await request<TData>("DELETE", url, options);
	},
};

export default http;
