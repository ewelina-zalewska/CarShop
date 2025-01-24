import { createFileRoute } from "@tanstack/react-router";
import { DeletePart } from "@/components/createForm/parts/DeletePart";
import { partQueryOptions } from "@/queries/partQuery";

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

export const Route = createFileRoute("/options/category/$categoryId/$partId")({
	loader: ({ context, params }) => {
		const { queryClient } = context;
		const { partId } = params;
		return queryClient.ensureQueryData(partQueryOptions(partId));
	},
	component: DeletePart,
	pendingComponent: Loading,
	errorComponent: Error,
});
