import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

const TheOptions = () => {
	return (
		<>
			<h1>ZARZĄDZAJ</h1>

			<ul>
				<li>
					<Link to="/options/category">DO LISTY KATEGORII</Link>
				</li>
				<li>
					<Link to="/options/new">DO NOWEJ KATEGORII</Link>
				</li>
				<li>
					<Link to="..">DO STRONY GŁOWNEJ</Link>
				</li>
			</ul>
			<Outlet />
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
	component: TheOptions,
	notFoundComponent: OptionNotFound,
});
