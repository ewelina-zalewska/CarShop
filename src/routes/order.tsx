import { createFileRoute } from "@tanstack/react-router";
import { GetOrder } from "@/components/order/GetOrder";
export const Route = createFileRoute("/order")({
	component: GetOrder,
});
