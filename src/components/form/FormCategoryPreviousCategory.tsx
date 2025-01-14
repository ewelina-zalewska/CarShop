import { Link } from "@tanstack/react-router";
import { CategoryResponse, useChangeCategoryProps } from "@/types";
import { useEffect, useState } from "react";

export const FormCategoryPreviousCategory = ({
	category,
	categories,
	categoryId,
}: useChangeCategoryProps) => {
	const [previousCategory, setPreviousCategory] = useState<CategoryResponse>();

	useEffect(() => {
		const previousPosition = category.position - 1;
		const previous = categories.find(
			(category) => category.position === (previousPosition || categories[0]),
		);
		setPreviousCategory(previous);
	}, [categoryId]);

	return (
		<>
			{category.position !== 1 && (
				<Link
					to="/creator/$categoryId"
					params={{
						categoryId: previousCategory ? previousCategory.id : categoryId,
					}}
				>
					COFNIJ
				</Link>
			)}
		</>
	);
};
