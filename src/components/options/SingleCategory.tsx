import { useSuspenseQuery } from "@tanstack/react-query";
import { getRouteApi } from "@tanstack/react-router";
import { categoryQueryOptions } from "@/queries/categoryQuery";
const categoryRoute = getRouteApi(
	"/_optionWrapper/options/category/$categoryId",
);
export const SingleCategory = () => {
	const { categoryId } = categoryRoute.useParams();
	const { data } = useSuspenseQuery(categoryQueryOptions(categoryId));

	return (
		<div>
			<h2>{data.name}</h2>
			<ul>
				{data.parts.map((part) => (
					<li key={part.id}> {part.name} </li>
				))}
			</ul>
		</div>
	);
};
