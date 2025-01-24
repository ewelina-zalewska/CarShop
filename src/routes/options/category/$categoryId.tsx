import { createFileRoute } from "@tanstack/react-router";
import { categoryQueryOptions } from "@/queries/categoryQuery";
import { TheError } from "@/Shared/TheError";
import { DataLoading } from "@/Shared/DataLoading";

export const Route = createFileRoute("/options/category/$categoryId")({
	loader: ({ context, params }) => {
		const { queryClient } = context;
		const { categoryId } = params;
		return queryClient.ensureQueryData(categoryQueryOptions(categoryId));
	},
	pendingComponent: DataLoading,
	errorComponent: TheError,
});
