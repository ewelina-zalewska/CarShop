import { FormEvent, useEffect, useRef, useState } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { CategoryForm, CategoryFormErrors } from "@/types";
import { categoriesQueryOptions } from "@/queries/categoriesQuery";
import { useSuccess } from "@/hooks/useSuccess";
import { useForm } from "@/hooks/useForm";
import { useCreateCategoryMutation } from "@/mutations/useCreateCategoryMutation";
import { NewCategoryFormFieldset } from "@/components/createForm/categories/NewCategoryFormFieldset";
import { TheButton } from "@/Shared/TheButton";

import { validateCategory as VALIDATE_CATEGORY } from "@/utils/validateCategory";

export const NewCategory = () => {
	const formRef = useRef<HTMLFormElement>(null);
	const { success, setSuccess } = useSuccess();
	const [submitClicked, setSubmitClicked] = useState<boolean>(false);

	const { data: categories } = useSuspenseQuery(categoriesQueryOptions);
	const { mutate: CREATE_CATEGORY, isSuccess } = useCreateCategoryMutation();

	const [formState, setFormState, HANDLE_CHANGE] = useForm<CategoryForm>({
		name: "",
		identifier: "",
	});
	const { name, identifier } = formState;

	const [errors, setErrors] = useState<CategoryFormErrors>({
		name: [],
		identifier: [],
	});

	useEffect(() => {
		if (submitClicked) {
			const { newErrors } = VALIDATE_CATEGORY(formState);
			setErrors(newErrors);
		}
	}, [formState, submitClicked]);

	const HANDLE_SUBMIT = (e: FormEvent) => {
		e.preventDefault();
		const { newErrors, isSuccess } = VALIDATE_CATEGORY(formState);
		setErrors(newErrors);
		setSuccess(isSuccess);

		if (!success) {
			setSubmitClicked(true);
		} else {
			CREATE_CATEGORY({
				name,
				identifier,
				position: categories.length + 1,
			});

			setFormState({
				name,
				identifier,
			});
			setSubmitClicked(false);
			console.log("Form is being sent!");
		}
	};

	const navigate = useNavigate();

	const SEND_FORM = () => formRef.current?.requestSubmit();

	const GO_TO_CREATE_PART = () => {
		const lastCategory = categories[categories.length - 1];
		navigate({ to: `/options/category/${lastCategory.id}/newPart` });
	};
	return (
		<>
			<h1>STWÓRZ NOWĄ KATEGORIĘ</h1>
			<div>
				<h2>Nowa kategoria</h2>
				<form ref={formRef} onSubmit={HANDLE_SUBMIT}>
					<NewCategoryFormFieldset
						onChange={HANDLE_CHANGE}
						formState={formState}
						errors={errors}
					/>
					<TheButton
						onClick={SEND_FORM}
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
