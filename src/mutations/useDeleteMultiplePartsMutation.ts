import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PartsResponse } from "@/types";
import { apiCall } from "@/utils/apiCall";

export const useDeleteMultiplePartsMutation = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationKey: ["parts", "updateParts"],
		mutationFn: async (partsToDelete: PartsResponse[] | []) => {
			const updatePromises = partsToDelete.map((part) =>
				apiCall<PartsResponse>(`parts/${part.id}`, {
					method: "DELETE",
				}),
			);
			return Promise.all(updatePromises);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["parts"],
			});
		},
	});
};
