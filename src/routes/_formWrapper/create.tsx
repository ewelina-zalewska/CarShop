import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

const Create = () => {
	return (
		<main>
			<h1>KREATOR AUTA</h1>
			<main>
				<nav>
					<ul>
						<li>
							<Link
								to="/create/$createId"
								children={"Nadwozie"}
								params={{ createId: "body" }}
							/>
						</li>
						<li>
							<Link
								to="/create/$createId"
								children={"Silnik i Napęd"}
								params={{ createId: "engineAndDrive" }}
							/>
						</li>
						<li>
							<Link
								to="/create/$createId"
								children={"Bezpieczeństwo"}
								params={{ createId: "safety" }}
							/>
						</li>
						<li>
							<Link
								to="/create/$createId"
								children={"Wnętrze"}
								params={{ createId: "interior" }}
							/>
						</li>
						<li>
							<Link
								to="/create/$createId"
								children={"Komfort"}
								params={{ createId: "comfort" }}
							/>
						</li>
					</ul>
				</nav>
			</main>
			<Outlet />
			<Link to="..">DO STRONY GŁÓWNEJ</Link>
		</main>
	);
};

const FormNotFound = () => {
	return (
		<div>
			<p>Something went wrong.</p>
			<p>Form not found</p>
		</div>
	);
};

export const Route = createFileRoute("/_formWrapper/create")({
	component: Create,
	notFoundComponent: FormNotFound,
});
