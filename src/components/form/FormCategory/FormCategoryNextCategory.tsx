import { CategoryResponse, useChangeCategoryProps } from "@/types";
import { useEffect, useState } from "react";
import { FormLink } from "@/Shared/FormLink";

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
				<FormLink
					title="Dalej"
					link={`/creator/${nextCategory ? nextCategory.id : categoryId}`}
				/>
			)}
		</>
	);
};
