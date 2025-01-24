import { createLazyFileRoute } from "@tanstack/react-router";
import { DeletePart } from "@/components/createForm/parts/DeletePart";
import { TheError } from "@/Shared/TheError";
import { DataLoading } from "@/Shared/DataLoading";
import { PageNotFound } from "@/Shared/PageNotFound";

export const Route = createLazyFileRoute(
	"/options/category/$categoryId/$partId",
)({
	component: DeletePart,
	notFoundComponent: () => PageNotFound("Nie znaleziono opcji."),
	pendingComponent: DataLoading,
	errorComponent: TheError,
});
