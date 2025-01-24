import { createFileRoute } from "@tanstack/react-router";
import { categoriesQueryOptions } from "@/queries/categoriesQuery";
import { CreatorHomePage } from "@/components/form/CreatorHomePage";

const FormNotFound = () => {
	return (
		<div>
			<p>Something went wrong.</p>
			<p>Form not found</p>
		</div>
	);
};

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

export const Route = createFileRoute("/creator")({
	loader: ({ context }) => {
		const { queryClient } = context;
		return queryClient.ensureQueryData(categoriesQueryOptions);
	},
	component: CreatorHomePage,
	notFoundComponent: FormNotFound,
	pendingComponent: Loading,
	errorComponent: Error,
});
