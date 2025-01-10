import { FormEvent, useEffect } from "react";
import { categoriesQueryOptions } from "@/queries/categoriesQuery";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { CategoryForm } from "@/types";
import { useForm } from "@/hooks/useForm";
import { useCreateCategoryMutation } from "@/mutations/useCreateCategoryMutation";
import { NewCategoryFormFieldset } from "@/components/createForm/categories/NewCategoryFormFieldset";

export const NewCategory = () => {
	const { data } = useSuspenseQuery(categoriesQueryOptions);
	const { mutate: CREATE_CATEGORY, isSuccess } = useCreateCategoryMutation();

	const [formState, setFormState, HANDLE_CHANGE] = useForm<CategoryForm>({
		name: "",
		identifier: "",
	});

	const HANDLE_SUBMIT = (e: FormEvent) => {
		e.preventDefault();

		CREATE_CATEGORY({
			name: formState.name,
			identifier: formState.identifier,
			position: data.length + 1,
		});

		setFormState({
			name: "",
			identifier: "",
		});
	};

	const navigate = useNavigate();
	useEffect(() => {
		if (!isSuccess) return;
		navigate({ to: "/options/category" });
	}, [isSuccess]);

	return (
		<>
			<h1>STWÓRZ NOWĄ KATEGORIĘ</h1>
			<div>
				<h2>New category</h2>
				<form onSubmit={HANDLE_SUBMIT}>
					<NewCategoryFormFieldset
						onChange={HANDLE_CHANGE}
						formState={formState}
					/>
					<button type="submit">DODAJ</button>
				</form>
			</div>
		</>
	);
};
