import { createFileRoute } from "@tanstack/react-router";
import { partQueryOptions } from "@/queries/partQuery";
import { DataLoading } from "@/Shared/DataLoading";
import { TheError } from "@/Shared/TheError";

export const Route = createFileRoute("/options/category/$categoryId/$partId")({
	loader: ({ context, params }) => {
		const { queryClient } = context;
		const { partId } = params;
		return queryClient.ensureQueryData(partQueryOptions(partId));
	},
	pendingComponent: DataLoading,
	errorComponent: TheError,
});
