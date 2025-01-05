import { createLazyFileRoute } from "@tanstack/react-router";
import { SingleCategory } from "@/components/options/SingleCategory";

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

export const Route = createLazyFileRoute(
	"/_optionWrapper/options/category/$categoryId",
)({
	component: SingleCategory,
	pendingComponent: Loading,
	errorComponent: Error,
});
