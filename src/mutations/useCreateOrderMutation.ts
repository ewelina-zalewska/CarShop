import { useMutation, useQueryClient } from "@tanstack/react-query";
import { OrderDataDto, OrderDataResponse } from "@/types";
import { apiCall } from "@/utils/apiCall";

export const useCreateOrderMutation = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationKey: ["new-order"],
		mutationFn: async (body: OrderDataDto) =>
			apiCall<OrderDataResponse, OrderDataDto>("orders", {
				method: "POST",
				body,
			}),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["orders"],
			});
		},
	});
};
