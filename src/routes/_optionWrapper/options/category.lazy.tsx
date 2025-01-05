import { createLazyFileRoute } from "@tanstack/react-router";
import { CategoryList } from "@/components/options/CategoryList";

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
export const Route = createLazyFileRoute("/_optionWrapper/options/category")({
	component: CategoryList,
	pendingComponent: Loading,
	errorComponent: Error,
});
