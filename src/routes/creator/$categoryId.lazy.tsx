import { createLazyFileRoute } from "@tanstack/react-router";
import { FormCategory } from "@/components/form/FormCategory/FormCategory";
import { PageNotFound } from "@/Shared/PageNotFound";
import { DataLoading } from "@/Shared/DataLoading";
import { TheError } from "@/Shared/TheError";

export const Route = createLazyFileRoute("/creator/$categoryId")({
	component: FormCategory,
	notFoundComponent: () => PageNotFound("Nie znaleziono kategorii."),
	pendingComponent: DataLoading,
	errorComponent: TheError,
});
