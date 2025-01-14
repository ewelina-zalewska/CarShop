import { useEffect, useState } from "react";
import { CategoryResponse, useChangeCategoryProps } from "@/types";

export const usePreviousCategory = ({
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

	return {
		previousCategory: previousCategory ? previousCategory.id : categoryId,
	};
};
