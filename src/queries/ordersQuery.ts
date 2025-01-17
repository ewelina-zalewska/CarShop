import { queryOptions } from "@tanstack/react-query";
import { apiCall } from "@/utils/apiCall";
import { OrderDataResponse } from "@/types";

export const ordersQueryOptions = queryOptions({
	queryKey: ["orders"],
	queryFn: async () => {
		return apiCall<OrderDataResponse[]>("orders");
	},
});
