import { FormEvent, useEffect } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { categoriesQueryOptions } from "@/queries/categoriesQuery";
import { partsQueryOptions } from "@/queries/partsQuery";
import { useOptionsCategoryId } from "@/hooks/useOprionsCategoryId";
import { useDeleteCategoryMutation } from "@/mutations/useDeleteCategoryMutation";
import { useDeleteMultiplePartsMutation } from "@/mutations/useDeleteMultiplePartsMutation";
import { useUpdateMultipleCategoriesMutation } from "@/mutations/useUpdateMultipleCategoriesMutation";
import { DeleteConfirmation } from "@/Shared/DeleteConfirmation";

export const DeleteCategory = () => {
	const categoryId = useOptionsCategoryId();
	const { data: categories } = useSuspenseQuery(categoriesQueryOptions);
	const { data: parts } = useSuspenseQuery(partsQueryOptions);

	const { mutate: DELETE_CATEGORY, isSuccess } = useDeleteCategoryMutation();
	const { mutate: DELETE_PARTS } = useDeleteMultiplePartsMutation();
	const { mutate: UPDATE_CATEGORY_POSITION } =
		useUpdateMultipleCategoriesMutation();

	const HANDLE_DELETE = (e: FormEvent) => {
		e.preventDefault();
		DELETE_CATEGORY(categoryId);

		const partsToDelete = parts?.filter(
			(part) => part.categoryId === categoryId,
		);
		DELETE_PARTS(partsToDelete);

		const categoriesIds = categories?.filter(
			(category) => category.id !== categoryId,
		);
		UPDATE_CATEGORY_POSITION(categoriesIds);
	};

	const categoryName = categories?.find(
		(category) => category.id === categoryId,
	);

	const navigate = useNavigate();
	useEffect(() => {
		if (!isSuccess) return;
		navigate({ to: "/options/category" });
	}, [isSuccess]);

	if (!categoryName) return;
	return (
		<DeleteConfirmation
			width={500}
			height={300}
			item="kategorię"
			name={categoryName.name}
			link="/options/category/$categoryId"
			onClick={HANDLE_DELETE}
		/>
	);
};
