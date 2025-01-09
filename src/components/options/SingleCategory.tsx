import { useSuspenseQuery } from "@tanstack/react-query";
import { getRouteApi, Link } from "@tanstack/react-router";
import { categoryQueryOptions } from "@/queries/categoryQuery";
import { TheParts } from "@/components/TheParts";
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
					<TheParts key={part.id} option={part} />
				))}
			</ul>
			<Link to="/options/category">POWRÓT</Link>
		</div>
	);
};
