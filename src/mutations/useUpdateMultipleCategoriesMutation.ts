import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CategoryResponse } from "@/types";
import { apiCall } from "@/utils/apiCall";

export const useUpdateMultipleCategoriesMutation = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationKey: ["categories", "updateCategories"],
		mutationFn: async (categoryIds: CategoryResponse[] | []) => {
			const updatePromises = categoryIds.map((category, index) =>
				apiCall<CategoryResponse, Partial<{ position: number }>>(
					`categories/${category.id}`,
					{
						method: "PATCH",
						body: {
							position: index + 1,
						},
					},
				),
			);
			return Promise.all(updatePromises);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["categories"],
			});
		},
	});
};
