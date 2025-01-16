import { createFileRoute } from "@tanstack/react-router";
import { OrderData } from "@/components/form/OrderData/OrderData";

export const Route = createFileRoute("/_formWrapper/creator/orderdata")({
	component: OrderData,
});
