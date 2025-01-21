import { Route as CreateImport } from "@/routes/_formWrapper/creator";
import { Route as OptionsImport } from "@/routes/_optionWrapper/options";
import { Route as OrderImport } from "@/routes/order";
import { Link, Outlet } from "@tanstack/react-router";
import { MenuCollapsibleAccordion } from "@/Shared/MenuCollapsibleAccordion";
import { MainCollapsibleAccordion } from "@/Shared/MainCollapsibleAccordion";
import { OptionsSelectDiv } from "@/Shared/OptionsSelectDiv";

export const HomePage = () => {
	return (
		<>
			<MenuCollapsibleAccordion title="Car Shop">
				<ul>
					<li>
						<Link to={OptionsImport.fullPath}>ZARZĄDZAJ LISTĄ KATEGORII</Link>
					</li>
					<li>
						<Link to={CreateImport.fullPath}>KREUJ AUTO</Link>
					</li>
					<li>
						<Link to={OrderImport.fullPath}>TWOJE ZAMÓWIENIE</Link>
					</li>
				</ul>
			</MenuCollapsibleAccordion>
			<MainCollapsibleAccordion>
				<OptionsSelectDiv />
				<Outlet />
			</MainCollapsibleAccordion>
		</>
	);
};
