import { createFileRoute, Outlet } from "@tanstack/react-router";

const WrongOptionsPlace = () => {
	return (
		<div>
			<h1>Such option does not exist.</h1>
			<p> Did you want to go to "/option/new"?</p>
			<Outlet />
		</div>
	);
};

export const Route = createFileRoute("/_optionWrapper/options/$")({
	component: WrongOptionsPlace,
});
