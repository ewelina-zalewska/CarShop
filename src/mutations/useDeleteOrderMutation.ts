import { useMutation, useQueryClient } from "@tanstack/react-query";
import { OrderDataResponse } from "@/types";
import { apiCall } from "@/utils/apiCall";

export const useDeleteOrderMutation = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationKey: ["delete-order"],
		mutationFn: async (orderId: string) =>
			apiCall<OrderDataResponse>(`orders/${orderId}`, {
				method: "DELETE",
			}),
		onSuccess: () => {
			queryClient.refetchQueries({
				queryKey: ["category"],
			});
		},
	});
};
