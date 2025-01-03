import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

const Options = () => {
	return (
		<>
			<h1>ZARZĄDZAJ</h1>
			<Outlet />
			<ul>
				<li>
					<Link to="/options/list">DO LISTY OPCJI</Link>
				</li>
				<li>
					<Link to="/options/new">DO NOWEJ OPCJI</Link>
				</li>
				<li>
					<Link to="..">DO STRONY GŁOWNEJ</Link>
				</li>
			</ul>
		</>
	);
};

const OptionNotFound = () => {
	return (
		<div>
			<p>Something went wrong.</p>
			<p>Option not found</p>
		</div>
	);
};
export const Route = createFileRoute("/_optionWrapper/options")({
	component: Options,
	notFoundComponent: OptionNotFound,
});
