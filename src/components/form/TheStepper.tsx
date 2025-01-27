import { CategoryResponse } from "@/types";
import { Link } from "@tanstack/react-router";

type TheStepperProps = {
	categories: CategoryResponse[];
	selectedCategory: string;
};

export const TheStepper = ({
	categories,
	selectedCategory,
}: TheStepperProps) => {
	return (
		<ul className="lg:w-[50%] w-[30%] lg:mt-1">
			{categories.map((category) => (
				<li
					key={category.id}
					className={` w-[90%] ml-3 pl-3 py-1 shadow-additionalColorkBorder bg-theme-lightblue-color rounded-md ${category.id === selectedCategory ? "font-bold text-[22px]" : "font-normal text-[18px]"} ${localStorage.getItem(category.name) ? "text-theme-dark-pink-color" : "text-theme-dark-color"}`}
				>
					<Link to="/creator/$categoryId" params={{ categoryId: category.id }}>
						{category.name}
					</Link>
				</li>
			))}
		</ul>
	);
};
