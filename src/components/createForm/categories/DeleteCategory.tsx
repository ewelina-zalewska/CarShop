import { FormEvent, useEffect } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { categoriesQueryOptions } from "@/queries/categoriesQuery";
import { partsQueryOptions } from "@/queries/partsQuery";
import { useOptionsCategoryId } from "@/hooks/useOprionsCategoryId";
import { useDeleteCategoryMutation } from "@/mutations/useDeleteCategoryMutation";
import { useDeleteMultiplePartsMutation } from "@/mutations/useDeleteMultiplePartsMutation";
import { useUpdateMultipleCategoriesMutation } from "@/mutations/useUpdateMultipleCategoriesMutation";
import { TheButton } from "@/Shared/TheButton";
import { ModalBox } from "@/Shared/ModalBox";
import { LinkToPage } from "@/Shared/LinkToPage";

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

	const categoryName = categories
		?.filter((category) => category.id === categoryId)
		.map((category) => category.name);

	const navigate = useNavigate();
	useEffect(() => {
		if (!isSuccess) return;
		navigate({ to: "/options/category" });
	}, [isSuccess]);

	if (isPending) return <p>Loading...</p>;
	if (error) return <p>{error.message} </p>;
	return (
		<>
			<ModalBox width={500} height={300}>
				<p>
					Czy na pewno chcesz usunąć kategorię <strong>{categoryName}</strong>?
				</p>
				<TheButton btnLabel="Usuń" onClick={HANDLE_DELETE} />
				<LinkToPage link="/options/category/$categoryId" title="Powrót" />
			</ModalBox>
		</>
	);
};
