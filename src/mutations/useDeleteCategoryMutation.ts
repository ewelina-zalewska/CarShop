import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CategoryResponse } from "@/types";
import { apiCall } from "@/utils/apiCall";

export const useDeleteCategoryMutation = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationKey: ["delete-category"],
		mutationFn: async (categoryId: string) =>
			apiCall<CategoryResponse>(`categories/${categoryId}`, {
				method: "DELETE",
			}),
		onSuccess: (deletedCategory: CategoryResponse) => {
			queryClient.setQueryData<CategoryResponse[]>(
				["categories"],
				(oldCategory) => {
					return oldCategory?.filter(
						(category) => category.id !== deletedCategory.id,
					);
				},
			);
		},
	});
};
