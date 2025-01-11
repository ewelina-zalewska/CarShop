import { FormEvent } from "react";
import { categoriesQueryOptions } from "@/queries/categoriesQuery";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { CategoryForm } from "@/types";
import { useForm } from "@/hooks/useForm";
import { useCreateCategoryMutation } from "@/mutations/useCreateCategoryMutation";
import { NewCategoryFormFieldset } from "@/components/createForm/categories/NewCategoryFormFieldset";
import { TheButton } from "@/Shared/TheButton";

export const NewCategory = () => {
	const { data: categories } = useSuspenseQuery(categoriesQueryOptions);
	const { mutate: CREATE_CATEGORY, isSuccess } = useCreateCategoryMutation();
	const [formState, setFormState, HANDLE_CHANGE] = useForm<CategoryForm>({
		name: "",
		identifier: "",
	});
	const { name, identifier } = formState;

	const HANDLE_SUBMIT = (e: FormEvent) => {
		e.preventDefault();

		CREATE_CATEGORY({
			name,
			identifier,
			position: categories.length + 1,
		});

		setFormState({
			name,
			identifier,
		});
	};

	const navigate = useNavigate();

	const GO_TO_CREATE_PART = () => {
		const lastCategory = categories[categories.length - 1];
		navigate({ to: `/options/category/${lastCategory.id}/newPart` });
	};
	return (
		<>
			<h1>STWÓRZ NOWĄ KATEGORIĘ</h1>
			<div>
				<h2>Nowa kategoria</h2>
				<form onSubmit={HANDLE_SUBMIT}>
					<NewCategoryFormFieldset
						onChange={HANDLE_CHANGE}
						formState={formState}
					/>
					<TheButton
						disabled={isSuccess}
						btnLabel="DODAJ KATEGORIĘ"
						type="submit"
					></TheButton>
				</form>
				{isSuccess && (
					<div>
						<p>Kategoria {name} została dodana. Dodaj opcję. </p>
						<button onClick={GO_TO_CREATE_PART}>DODAJ OPCJĘ</button>
					</div>
				)}
			</div>
		</>
	);
};
