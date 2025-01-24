import { PartsResponse } from "@/types";
import { apiCall } from "@/utils/apiCall";
import { queryOptions } from "@tanstack/react-query";

export const partQueryOptions = (id: string) =>
	queryOptions({
		queryKey: ["category", id],
		queryFn: async () => {
			return apiCall<PartsResponse>(`parts/${id}`);
		},
	});
