import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PartsResponse } from "@/types";
import { apiCall } from "@/utils/apiCall";

export const useDeletePartMutation = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationKey: ["delete-part"],
		mutationFn: async (id: string) =>
			apiCall<PartsResponse>(`parts/${id}`, {
				method: "DELETE",
			}),
		onSuccess: (deletedPart: PartsResponse) => {
			queryClient.setQueryData<PartsResponse[]>(
				["parts"],
				(oldPartsResponse) => {
					return oldPartsResponse?.filter((part) => part.id !== deletedPart.id);
				},
			);
		},
	});
};
