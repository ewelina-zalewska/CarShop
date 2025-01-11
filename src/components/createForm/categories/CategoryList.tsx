import { useSuspenseQuery } from "@tanstack/react-query";
import { Link, Outlet } from "@tanstack/react-router";
import { categoriesQueryOptions } from "@/queries/categoriesQuery";

export const CategoryList = () => {
	const { data: categories } = useSuspenseQuery(categoriesQueryOptions);

	return (
		<>
			<h1>LISTA KATEGORII</h1>
			<Outlet />
			<ul>
				{categories.map((category) => (
					<li key={category.id}>
						<p>{category.name} </p>
						<Link
							to="/options/category/$categoryId"
							params={{ categoryId: category.id }}
						>
							DETAILS
						</Link>
					</li>
				))}
			</ul>
		</>
	);
};
