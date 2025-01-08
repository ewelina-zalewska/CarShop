import { useDeleteCategoryMutation } from "@/mutations/useDeleteCategoryMutation";
import { useUpdateMultipleCategoriesMutation } from "@/mutations/useUpdateMultipleCategoriesMutation";
import { categoriesQueryOptions } from "@/queries/categoriesQuery";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Link, Outlet } from "@tanstack/react-router";

export const CategoryList = () => {
	const { data: categories } = useSuspenseQuery(categoriesQueryOptions);

	const { mutate: UPDATE_CATEGORY_POSITION } =
		useUpdateMultipleCategoriesMutation();

	const { mutate: DELETE_CATEGORY, isPending } = useDeleteCategoryMutation();

	const HANDLE_DELETE = (deletedCategoryId: string) => {
		DELETE_CATEGORY(deletedCategoryId);
		const categoriesIds = categories?.filter(
			(category) => category.id !== deletedCategoryId,
		);
		UPDATE_CATEGORY_POSITION(categoriesIds);
	};

	if (isPending) return <p>Loading...</p>;

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
						<button onClick={() => HANDLE_DELETE(category.id)}>DELETE</button>
					</li>
				))}
			</ul>
		</>
	);
};
