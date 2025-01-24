import { createFileRoute } from "@tanstack/react-router";
import { NewPart } from "@/components/createForm/parts/NewPart";

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

export const Route = createFileRoute("/options/category/$categoryId/newPart")({
	component: NewPart,
	pendingComponent: Loading,
	errorComponent: Error,
});
