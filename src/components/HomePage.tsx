import { Route as CreateImport } from "@/routes/_formWrapper/creator";
import { Route as OptionsImport } from "@/routes/_optionWrapper/options";
import { Link, Outlet } from "@tanstack/react-router";
import { OptionsSelectDiv } from "@/Shared/OptionsSelectDiv";

export const HomePage = () => {
	return (
		<>
			<header>
				<nav>
					<h1>Projekt Car Shop – stwórz swoje wymarzone auto.</h1>
					<ul>
						<li>
							<Link to={OptionsImport.fullPath}>ZARZĄDZAJ LISTĄ KATEGORII</Link>
						</li>
						<li>
							<Link to={CreateImport.fullPath}>KREUJ AUTO</Link>
						</li>
					</ul>
					<OptionsSelectDiv />
				</nav>
			</header>
			<Outlet />
		</>
	);
};
