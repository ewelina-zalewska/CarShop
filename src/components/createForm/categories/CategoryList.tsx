import { useSuspenseQuery } from "@tanstack/react-query";
import { Link, Outlet } from "@tanstack/react-router";
import { categoriesQueryOptions } from "@/queries/categoriesQuery";

export const CategoryList = () => {
	const { data: categories } = useSuspenseQuery(categoriesQueryOptions);

	return (
		<>
			<div className=" lg:h-[600px] lg:self-center lg:ml-[200px] w-full text-theme-lightblue-color pt-[20px] lg:pt-[100px]">
				<h1 className="text-[30px] text-center">LISTA KATEGORII</h1>
				<Outlet />
				<ul className="flex flex-wrap mt-[70px] lg:ml-[50px] gap-[20px] justify-center">
					{categories.map((category) => (
						<li
							className="basis-[200px] h-[70px] shadow-additionalColorkBorder bg-theme-lightblue-color rounded-lg text-theme-dark-color text-center p-2"
							key={category.id}
						>
							<Link
								to="/options/category/$categoryId"
								params={{ categoryId: category.id }}
							>
								<p>{category.name} </p>
								DETAILS
							</Link>
						</li>
					))}
				</ul>
			</div>
		</>
	);
};
