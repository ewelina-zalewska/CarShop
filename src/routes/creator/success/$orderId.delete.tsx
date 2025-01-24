import { orderQueryOptions } from "@/queries/orderQuery";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/creator/success/$orderId/delete")({
	loader: ({ context, params }) => {
		const { queryClient } = context;
		const { orderId } = params;
		return queryClient.ensureQueryData(orderQueryOptions(orderId));
	},
});
