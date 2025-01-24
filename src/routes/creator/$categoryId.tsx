import { categoryQueryOptions } from "@/queries/categoryQuery";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/creator/$categoryId")({
	loader: ({ context, params }) => {
		const { queryClient } = context;
		const { categoryId } = params;
		return queryClient.ensureQueryData(categoryQueryOptions(categoryId));
	},
});
