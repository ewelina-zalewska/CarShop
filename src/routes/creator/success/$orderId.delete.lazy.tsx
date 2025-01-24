import { createLazyFileRoute } from "@tanstack/react-router";
import { TheSuccessDeleteOrder } from "@/components/form/OrderData/TheSuccess/TheSuccessDeleteOrder";
import { DataLoading } from "@/Shared/DataLoading";
import { TheError } from "@/Shared/TheError";
import { PageNotFound } from "@/Shared/PageNotFound";

export const Route = createLazyFileRoute("/creator/success/$orderId/delete")({
	component: TheSuccessDeleteOrder,
	notFoundComponent: () => PageNotFound("Nie znaleziono zamówienia."),
	pendingComponent: DataLoading,
	errorComponent: TheError,
});
