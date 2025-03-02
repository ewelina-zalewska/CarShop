﻿import { createLazyFileRoute } from "@tanstack/react-router";
import { TheSuccess } from "@/components/form/OrderData/TheSuccess/TheSuccess";
import { PageNotFound } from "@/Shared/PageNotFound";
import { DataLoading } from "@/Shared/DataLoading";
import { TheError } from "@/Shared/TheError";

export const Route = createLazyFileRoute("/creator/success/$orderId")({
	component: TheSuccess,
	notFoundComponent: () => PageNotFound("Nie znaleziono zamówienia."),
	pendingComponent: DataLoading,
	errorComponent: TheError,
});
