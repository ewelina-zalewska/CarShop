import { createFileRoute, Outlet } from "@tanstack/react-router";
import { OptionsSelectDiv } from "@/Shared/OptionsSelectDiv";

const Options = () => {
	return (
		<div>
			<OptionsSelectDiv title="Wybierz jedną z opcji menu." />
			<Outlet />
		</div>
	);
};

export const Route = createFileRoute("/options/")({
	component: Options,
});
