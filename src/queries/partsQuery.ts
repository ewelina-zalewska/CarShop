import { PartsResponse } from "@/types";
import { apiCall } from "@/utils/apiCall";
import { queryOptions } from "@tanstack/react-query";

export const partsQueryOptions = queryOptions({
	queryKey: ["parts"],
	queryFn: async () => {
		return apiCall<PartsResponse[]>("parts");
	},
});
