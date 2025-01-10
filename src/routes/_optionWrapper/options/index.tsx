import { createFileRoute, Outlet } from "@tanstack/react-router";
import { OptionsSelectDiv } from "@/Shared/OptionsSelectDiv";

const Options = () => {
	return (
		<div>
			<OptionsSelectDiv />
			<Outlet />
		</div>
	);
};

export const Route = createFileRoute("/_optionWrapper/options/")({
	component: Options,
});
