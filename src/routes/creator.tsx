import { createFileRoute } from "@tanstack/react-router";
import { categoriesQueryOptions } from "@/queries/categoriesQuery";

export const Route = createFileRoute("/creator")({
	loader: ({ context }) => {
		const { queryClient } = context;
		return queryClient.ensureQueryData(categoriesQueryOptions);
	},
});
