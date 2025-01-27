import { CategoryResponse, useChangeCategoryProps } from "@/types";
import { useEffect, useState } from "react";
import { FormLink } from "@/Shared/FormLink";

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
				<FormLink
					title="Cofnij"
					link={`/creator/${previousCategory ? previousCategory.id : categoryId}`}
				/>
			)}
		</>
	);
};
