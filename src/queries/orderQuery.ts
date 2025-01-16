import { OrderDataResponse } from "@/types";
import { apiCall } from "@/utils/apiCall";
import { queryOptions } from "@tanstack/react-query";

export const orderQueryOptions = (orderId: string) =>
	queryOptions({
		queryKey: ["order", orderId],
		queryFn: async () => {
			return apiCall<OrderDataResponse>(`orders/${orderId}`);
		},
	});
