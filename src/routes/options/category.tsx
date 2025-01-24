import { createFileRoute } from "@tanstack/react-router";
import { categoriesQueryOptions } from "@/queries/categoriesQuery";

const Loading = () => {
	return (
		<div>
			<h1>Loading data...</h1>
		</div>
	);
};

const Error = () => {
	return (
		<div>
			<h1>Error</h1>
		</div>
	);
};
export const Route = createFileRoute("/options/category")({
	loader: ({ context }) => {
		const { queryClient } = context;
		return queryClient.ensureQueryData(categoriesQueryOptions);
	},
	pendingComponent: Loading,
	errorComponent: Error,
});
