import { useSuspenseQuery } from "@tanstack/react-query";
import { getRouteApi, Link, Outlet } from "@tanstack/react-router";
import { categoryQueryOptions } from "@/queries/categoryQuery";
import { useDeleteCategoryMutation } from "@/mutations/useDeleteCategoryMutation";
import { SinglePart } from "@/components/createForm/parts/SinglePart";

const categoryRoute = getRouteApi(
	"/_optionWrapper/options/category/$categoryId",
);

export const SingleCategory = () => {
	const { categoryId } = categoryRoute.useParams();
	const { data } = useSuspenseQuery(categoryQueryOptions(categoryId));
	const { error, isPending } = useDeleteCategoryMutation();

	if (isPending) return <p>Loading...</p>;
	return (
		<>
			<div>
				<h2>{data.name}</h2>

				<ul>
					{data.parts.map((part) => (
						<SinglePart key={part.id} option={part} />
					))}
				</ul>
				<Outlet />
				<Link
					to="/options/category/$categoryId/newPart"
					params={{ categoryId: data.id }}
				>
					DODAJ OPCJĘ
				</Link>
				<Link
					to="/options/category/$categoryId/delete"
					params={{ categoryId: data.id }}
				>
					USUŃ KATEGORIĘ
				</Link>
				{error && <p>{error.message}</p>}
			</div>
			<Link to="/options/category">POWRÓT</Link>
		</>
	);
};
