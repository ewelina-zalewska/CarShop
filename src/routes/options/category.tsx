import { createFileRoute } from "@tanstack/react-router";
import { categoriesQueryOptions } from "@/queries/categoriesQuery";
import { DataLoading } from "@/Shared/DataLoading";
import { TheError } from "@/Shared/TheError";

export const Route = createFileRoute("/options/category")({
	loader: ({ context }) => {
		const { queryClient } = context;
		return queryClient.ensureQueryData(categoriesQueryOptions);
	},
	pendingComponent: DataLoading,
	errorComponent: TheError,
});
