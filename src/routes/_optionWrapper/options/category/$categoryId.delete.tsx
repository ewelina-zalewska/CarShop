import { createFileRoute } from "@tanstack/react-router";
import { DeleteCategory } from "@/components/createForm/categories/DeleteCategory";
import { categoryQueryOptions } from "@/queries/categoryQuery";

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

export const Route = createFileRoute(
	"/_optionWrapper/options/category/$categoryId/delete",
)({
	loader: ({ context, params }) => {
		const { queryClient } = context;
		const { categoryId } = params;
		return queryClient.ensureQueryData(categoryQueryOptions(categoryId));
	},
	component: DeleteCategory,
	pendingComponent: Loading,
	errorComponent: Error,
});
