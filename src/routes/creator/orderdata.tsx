import { createFileRoute } from "@tanstack/react-router";
import { OrderData } from "@/components/form/OrderData/OrderData";
import { DataLoading } from "@/Shared/DataLoading";
import { TheError } from "@/Shared/TheError";

export const Route = createFileRoute("/creator/orderdata")({
	component: OrderData,
	pendingComponent: DataLoading,
	errorComponent: TheError,
});
