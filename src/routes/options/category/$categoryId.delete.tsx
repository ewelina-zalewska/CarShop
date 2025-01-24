import { createFileRoute } from "@tanstack/react-router";
import { categoryQueryOptions } from "@/queries/categoryQuery";
import { DataLoading } from "@/Shared/DataLoading";
import { TheError } from "@/Shared/TheError";

export const Route = createFileRoute("/options/category/$categoryId/delete")({
	loader: ({ context, params }) => {
		const { queryClient } = context;
		const { categoryId } = params;
		return queryClient.ensureQueryData(categoryQueryOptions(categoryId));
	},
	pendingComponent: DataLoading,
	errorComponent: TheError,
});
