import { createFileRoute, Outlet } from "@tanstack/react-router";
import { OptionsSelectDiv } from "@/Shared/OptionsSelectDiv";

const Options = () => {
	return (
		<>
			<OptionsSelectDiv title="Wybierz jedną z opcji menu." />
			<Outlet />
		</>
	);
};

export const Route = createFileRoute("/options/")({
	component: Options,
});
