import { createFileRoute } from "@tanstack/react-router";
import { OptionsList } from "@/components/createForm/OptionsList";

const OptionNotFound = () => {
	return (
		<div>
			<p>Something went wrong.</p>
			<p>Option not found</p>
		</div>
	);
};
export const Route = createFileRoute("/options")({
	component: OptionsList,
	notFoundComponent: OptionNotFound,
});
