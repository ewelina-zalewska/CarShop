import { useEffect } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Link, useNavigate } from "@tanstack/react-router";
import { categoriesQueryOptions } from "@/queries/categoriesQuery";
import { partsQueryOptions } from "@/queries/partsQuery";
import { useOptionsCategoryId } from "@/hooks/useOprionsCategoryId";
import { useDeleteCategoryMutation } from "@/mutations/useDeleteCategoryMutation";
import { useDeleteMultiplePartsMutation } from "@/mutations/useDeleteMultiplePartsMutation";
import { useUpdateMultipleCategoriesMutation } from "@/mutations/useUpdateMultipleCategoriesMutation";
import { TheButton } from "@/Shared/TheButton";

export const DeleteCategory = () => {
	const categoryId = useOptionsCategoryId();
	const { data: categories } = useSuspenseQuery(categoriesQueryOptions);
	const { data: parts } = useSuspenseQuery(partsQueryOptions);

	const {
		mutate: DELETE_CATEGORY,
		isPending,
		isSuccess,
		error,
	} = useDeleteCategoryMutation();
	const { mutate: DELETE_PARTS } = useDeleteMultiplePartsMutation();
	const { mutate: UPDATE_CATEGORY_POSITION } =
		useUpdateMultipleCategoriesMutation();

	const HANDLE_DELETE = () => {
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

	const categoryName = categories
		?.filter((category) => category.id === categoryId)
		.map((category) => category.name);

	const navigate = useNavigate();
	useEffect(() => {
		if (!isSuccess) return;
		navigate({ to: "/options/category" });
	}, [isSuccess]);

	if (isPending) return <p>Loading...</p>;
	return (
		<div>
			<p>
				Czy na pewno chesz usunąć kategorię <strong>{categoryName}</strong>?
			</p>
			<TheButton btnLabel="USUŃ" onClick={HANDLE_DELETE} />
			<Link to="/options/category/$categoryId" params={{ categoryId }}>
				POWRÓT
			</Link>
			{error && <p>{error.message}</p>}
		</div>
	);
};
