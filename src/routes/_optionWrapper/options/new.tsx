import { createFileRoute } from "@tanstack/react-router";

const Options = () => {
	return (
		<>
			<h1>STWÓRZ NOWĄ OPCJĘ</h1>
		</>
	);
};

export const Route = createFileRoute("/_optionWrapper/options/new")({
	component: Options,
});
