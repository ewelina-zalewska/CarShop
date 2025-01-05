import { useDeleteCategoryMutation } from "@/mutations/useDeleteCategoryMutation";
import { categoriesQueryOptions } from "@/queries/categoriesQuery";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Link, Outlet } from "@tanstack/react-router";

export const CategoryList = () => {
	const { data } = useSuspenseQuery(categoriesQueryOptions);
	const { mutate, isPending } = useDeleteCategoryMutation();

	const HANDLE_DELETE = (categoryId: string) => mutate(categoryId);
	if (isPending) return <p>Loading...</p>;
	return (
		<>
			<h1>LISTA KATEGORII</h1>
			<Outlet />
			<ul>
				{data.map((category) => (
					<li key={category.id}>
						<p>{category.name} </p>
						<Link
							to="/options/category/$categoryId"
							params={{ categoryId: category.id }}
						>
							DETAILS
						</Link>
						<button onClick={() => HANDLE_DELETE(category.id)}>DELETE</button>
					</li>
				))}
			</ul>
		</>
	);
};
