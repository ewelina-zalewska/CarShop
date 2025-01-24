import { NewCategory } from "@/components/createForm/categories/NewCategory";
import { DataLoading } from "@/Shared/DataLoading";
import { PageNotFound } from "@/Shared/PageNotFound";
import { TheError } from "@/Shared/TheError";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/options/new")({
	component: NewCategory,
	notFoundComponent: () => PageNotFound("Nie znaleziono formularza."),
	pendingComponent: DataLoading,
	errorComponent: TheError,
});
