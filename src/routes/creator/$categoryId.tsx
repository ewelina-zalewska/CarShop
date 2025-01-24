import { categoryQueryOptions } from "@/queries/categoryQuery";
import { DataLoading } from "@/Shared/DataLoading";
import { TheError } from "@/Shared/TheError";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/creator/$categoryId")({
	loader: ({ context, params }) => {
		const { queryClient } = context;
		const { categoryId } = params;
		return queryClient.ensureQueryData(categoryQueryOptions(categoryId));
	},
	pendingComponent: DataLoading,
	errorComponent: TheError,
});
