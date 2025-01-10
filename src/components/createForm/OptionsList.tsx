import { Link, Outlet } from "@tanstack/react-router";

export const OptionsList = () => {
	return (
		<>
			<nav>
				<h1>ZARZĄDZAJ LISTĄ</h1>

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
			</nav>
			<section>
				<Outlet />
			</section>
		</>
	);
};
