import { createLazyFileRoute } from "@tanstack/react-router";
import { TheOrder } from "@/components/order/TheOrder";
import { PageNotFound } from "@/Shared/PageNotFound";
import { DataLoading } from "@/Shared/DataLoading";
import { TheError } from "@/Shared/TheError";

export const Route = createLazyFileRoute("/order/$orderId")({
	component: TheOrder,
	notFoundComponent: () => PageNotFound("Nie znaleziono zamówienia."),
	pendingComponent: DataLoading,
	errorComponent: TheError,
});
