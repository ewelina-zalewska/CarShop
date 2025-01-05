import { CategorySearch } from "@/types";
import { createFileRoute, Link } from "@tanstack/react-router";

const SingleCategory = () => {
	const { page } = Route.useSearch();
	return (
		<div>
			<ul>
				<li>
					<Link
						to="."
						search={(prev) => ({
							...prev,
							page: prev.page && prev.page > 2 ? prev.page - 1 : 1,
						})}
					>
						POPRZEDNIA STRONA
					</Link>
				</li>
				<li>
					<Link
						to="."
						search={(prev) => ({
							...prev,
							page: prev.page && prev.page < 3 ? prev.page + 1 : 3,
						})}
					>
						NASTĘPNA STRONA
					</Link>
				</li>
			</ul>
			<p>strona: {page}</p>
		</div>
	);
};

export const Route = createFileRoute("/_formWrapper/create/$createId")({
	validateSearch: (search: Record<string, unknown>): CategorySearch => ({
		page: Number(search?.page ?? 1),
		pageSize: Number(search?.pageSize ?? 20),
	}),
	component: SingleCategory,
});
