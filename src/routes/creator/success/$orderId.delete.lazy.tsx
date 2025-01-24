import { createLazyFileRoute } from "@tanstack/react-router";
import { TheSuccessDeleteOrder } from "@/components/form/OrderData/TheSuccess/TheSuccessDeleteOrder";

export const Route = createLazyFileRoute("/creator/success/$orderId/delete")({
	component: TheSuccessDeleteOrder,
});
