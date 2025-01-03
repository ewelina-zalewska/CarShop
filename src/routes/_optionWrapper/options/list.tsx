import { createFileRoute } from "@tanstack/react-router";

const Options = () => {
	return (
		<>
			<h1>LISTA OPCJI</h1>
			<div></div>
		</>
	);
};

export const Route = createFileRoute("/_optionWrapper/options/list")({
	component: Options,
});
