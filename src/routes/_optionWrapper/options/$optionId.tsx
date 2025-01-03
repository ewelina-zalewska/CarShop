import { createFileRoute, Outlet } from "@tanstack/react-router";

const SingleOption = () => {
	const { optionId } = Route.useParams();

	return (
		<div>
			<p>Option: {optionId}</p>
			<Outlet />
		</div>
	);
};

export const Route = createFileRoute("/_optionWrapper/options/$optionId")({
	component: SingleOption,
});
