"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ChildrenType } from "../types";

type Props = ChildrenType;

const queryClient = new QueryClient();

const ReactQueryProvider = ({ children }: Props) => {
	const isDevMode = process.env.NODE_ENV === "development";

	return (
		<QueryClientProvider client={queryClient}>
			{children}

			{isDevMode && (
				<ReactQueryDevtools
					initialIsOpen={false}
					buttonPosition="bottom-left"
				/>
			)}
		</QueryClientProvider>
	);
};

export default ReactQueryProvider;
