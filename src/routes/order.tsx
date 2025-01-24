import { createFileRoute } from "@tanstack/react-router";
import { GetOrder } from "@/components/order/GetOrder";
import { TheError } from "@/Shared/TheError";
import { DataLoading } from "@/Shared/DataLoading";
import { PageNotFound } from "@/Shared/PageNotFound";

export const Route = createFileRoute("/order")({
	component: GetOrder,
	notFoundComponent: () => PageNotFound("Nie znaleziono formularza."),
	pendingComponent: DataLoading,
	errorComponent: TheError,
});
