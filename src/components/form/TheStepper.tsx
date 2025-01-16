import { CategoryResponse } from "@/types";

type TheStepperProps = {
	categories: CategoryResponse[];
	selectedCategory: string;
};

export const TheStepper = ({
	categories,
	selectedCategory,
}: TheStepperProps) => {
	return (
		<ul>
			{categories.map((category) => (
				<li
					key={category.id}
					style={{
						fontWeight: `${category.id === selectedCategory ? "bold" : "normal"}`,
					}}
				>
					{category.name}
				</li>
			))}
		</ul>
	);
};
