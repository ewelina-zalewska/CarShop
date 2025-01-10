import { useEffect } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { CategoryResponse } from "@/types";
import { categoriesQueryOptions } from "@/queries/categoriesQuery";
import { partsQueryOptions } from "@/queries/partsQuery";
import { useDeleteCategoryMutation } from "@/mutations/useDeleteCategoryMutation";
import { useDeleteMultiplePartsMutation } from "@/mutations/useDeleteMultiplePartsMutation";
import { useUpdateMultipleCategoriesMutation } from "@/mutations/useUpdateMultipleCategoriesMutation";
import { TheButton } from "@/Shared/TheButton";

type DeleteCategoryConfirmationProps = {
	onCancel: () => void;
	deletedCategory: CategoryResponse;
};

export const DeleteCategoryConfirmation = ({
	onCancel,
	deletedCategory,
}: DeleteCategoryConfirmationProps) => {
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
		DELETE_CATEGORY(deletedCategory.id);

		const partsToDelete = parts?.filter(
			(part) => part.categoryId === deletedCategory.id,
		);
		DELETE_PARTS(partsToDelete);

		const categoriesIds = categories?.filter(
			(category) => category.id !== deletedCategory.id,
		);
		UPDATE_CATEGORY_POSITION(categoriesIds);
	};

	const navigate = useNavigate();
	useEffect(() => {
		if (!isSuccess) return;
		navigate({ to: "/options/category" });
	}, [isSuccess]);

	if (isPending) return <p>Loading...</p>;
	return (
		<div>
			<p>
				Do you really want to delete category{" "}
				<strong>{deletedCategory.name}</strong>?
			</p>
			<TheButton btnLabel="DELETE" onClick={HANDLE_DELETE} />
			<TheButton btnLabel="CANCEL" onClick={onCancel} />
			{error && <p>{error.message}</p>}
		</div>
	);
};
