import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CategoryDto, CategoryResponse } from "@/types";
import { apiCall } from "@/utils/apiCall";

export const useCreateCategoryMutation = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationKey: ["new-category"],
		mutationFn: async (body: CategoryDto) =>
			apiCall<CategoryResponse, CategoryDto>("categories", {
				method: "POST",
				body,
			}),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["categories"],
			});
		},
	});
};
