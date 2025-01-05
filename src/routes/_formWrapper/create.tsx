import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { categoriesQueryOptions } from "@/queries/categoriesQuery";
import { useSuspenseQuery } from "@tanstack/react-query";

const Create = () => {
	const { data } = useSuspenseQuery(categoriesQueryOptions);
	return (
		<main>
			<h1>KREATOR AUTA</h1>
			<main>
				<nav>
					<ul>
						{data.map((category) => (
							<li key={category.id}>
								<Link
									to="/create/$createId"
									params={{ createId: category.identifier }}
									search={{
										page: 1,
										pageSize: 4,
									}}
								>
									{category.name}
								</Link>
							</li>
						))}
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

const Loading = () => {
	return (
		<div>
			<h1>Loading data...</h1>
		</div>
	);
};

const Error = () => {
	return (
		<div>
			<h1>Error</h1>
		</div>
	);
};

export const Route = createFileRoute("/_formWrapper/create")({
	loader: ({ context }) => {
		const { queryClient } = context;
		return queryClient.ensureQueryData(categoriesQueryOptions);
	},
	component: Create,
	notFoundComponent: FormNotFound,
	pendingComponent: Loading,
	errorComponent: Error,
});
