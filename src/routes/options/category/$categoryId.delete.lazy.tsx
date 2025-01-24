import { createLazyFileRoute } from "@tanstack/react-router";
import { DeleteCategory } from "@/components/createForm/categories/DeleteCategory";
import { PageNotFound } from "@/Shared/PageNotFound";
import { DataLoading } from "@/Shared/DataLoading";
import { TheError } from "@/Shared/TheError";

export const Route = createLazyFileRoute(
	"/options/category/$categoryId/delete",
)({
	component: DeleteCategory,
	notFoundComponent: () => PageNotFound("Nie znaleziono kategorii."),
	pendingComponent: DataLoading,
	errorComponent: TheError,
});
