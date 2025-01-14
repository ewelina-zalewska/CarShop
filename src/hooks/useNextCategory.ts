import { useEffect, useState } from "react";
import { CategoryResponse, useChangeCategoryProps } from "@/types";

export const useNextCategory = ({
	category,
	categories,
	categoryId,
}: useChangeCategoryProps) => {
	const [nextCategory, setNextCategory] = useState<CategoryResponse>();

	useEffect(() => {
		const nextPosition = category.position + 1;
		const next = categories.find(
			(category) => category.position === (nextPosition || categories.length),
		);
		setNextCategory(next);
	}, [categoryId]);

	return { nextCategory: nextCategory ? nextCategory.id : categoryId };
};
