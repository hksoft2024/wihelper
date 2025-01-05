type HttpResponseSuccess<TData> = {
	is_succeeded: true;
	data: TData;
};

type HttpResponseError = {
	is_succeeded: false;
	data: false;
};

export type HttpResponse<TData> = (
	| HttpResponseSuccess<TData>
	| HttpResponseError
) & {
	code: number;
	message: string;
};

export type PaginatedData<TData> = {
	items: TData[];
	current_page: number;
	total_pages: number;
	page_size: number;
	total_count: number;
};

export type PaginationQuery = {
	PageIndex: number;
	PageSize: number;
};
