import { createLazyFileRoute } from "@tanstack/react-router";
import { CategoryList } from "@/components/createForm/categories/CategoryList";
import { TheError } from "@/Shared/TheError";
import { DataLoading } from "@/Shared/DataLoading";
import { PageNotFound } from "@/Shared/PageNotFound";

export const Route = createLazyFileRoute("/options/category")({
	component: CategoryList,
	notFoundComponent: () => PageNotFound("Nie znaleziono kategorii."),
	pendingComponent: DataLoading,
	errorComponent: TheError,
});
