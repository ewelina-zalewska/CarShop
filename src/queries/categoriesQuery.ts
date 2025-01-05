import { CategoryResponse } from "@/types";
import { apiCall } from "@/utils/apiCall";
import { queryOptions } from "@tanstack/react-query";

export const categoriesQueryOptions = queryOptions({
	queryKey: ["categories"],
	queryFn: async () => {
		return apiCall<CategoryResponse[]>("categories");
	},
});
