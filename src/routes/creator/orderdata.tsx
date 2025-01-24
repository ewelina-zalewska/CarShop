import { createFileRoute } from "@tanstack/react-router";
import { OrderData } from "@/components/form/OrderData/OrderData";

export const Route = createFileRoute("/creator/orderdata")({
	component: OrderData,
});
