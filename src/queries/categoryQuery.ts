import { CategoryOptions } from "@/types";
import { apiCall } from "@/utils/apiCall";
import { queryOptions } from "@tanstack/react-query";

export const categoryQueryOptions = (categoryId: string) =>
	queryOptions({
		queryKey: ["category", categoryId],
		queryFn: async () => {
			return apiCall<CategoryOptions>(`categories/${categoryId}?_embed=parts`);
		},
	});
