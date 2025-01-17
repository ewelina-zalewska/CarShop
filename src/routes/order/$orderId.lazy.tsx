import { createLazyFileRoute } from "@tanstack/react-router";
import { TheOrder } from "@/components/order/TheOrder";

export const Route = createLazyFileRoute("/order/$orderId")({
	component: TheOrder,
});
