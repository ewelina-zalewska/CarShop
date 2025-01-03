import { createFileRoute, Outlet } from "@tanstack/react-router";

const Options = () => {
	return (
		<div>
			<Outlet />
		</div>
	);
};

export const Route = createFileRoute("/_optionWrapper/options/")({
	component: Options,
});
