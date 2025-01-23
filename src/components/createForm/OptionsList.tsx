import { Link, Outlet } from "@tanstack/react-router";
import { MenuCollapsibleAccordion } from "@/Shared/MenuCollapsibleAccordion";
import { MainCollapsibleAccordion } from "@/Shared/MainCollapsibleAccordion";

export const OptionsList = () => {
	return (
		<>
			<MenuCollapsibleAccordion title="Car Shop">
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
			</MenuCollapsibleAccordion>
			<MainCollapsibleAccordion>
				<Outlet />
			</MainCollapsibleAccordion>
		</>
	);
};
