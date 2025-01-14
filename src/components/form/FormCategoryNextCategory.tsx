import { Link } from "@tanstack/react-router";
import { CategoryResponse, useChangeCategoryProps } from "@/types";
import { useEffect, useState } from "react";

export const FormCategoryNextCategory = ({
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
	return (
		<>
			{category.position !== categories.length && (
				<Link
					to="/creator/$categoryId"
					params={{
						categoryId: nextCategory ? nextCategory.id : categoryId,
					}}
				>
					DALEJ
				</Link>
			)}
		</>
	);
};
