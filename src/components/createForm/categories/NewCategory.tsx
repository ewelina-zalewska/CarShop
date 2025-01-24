import { FormEvent, useEffect, useRef, useState } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { CategoryForm, CategoryFormErrors } from "@/types";
import { categoriesQueryOptions } from "@/queries/categoriesQuery";
import { useForm } from "@/hooks/useForm";
import { useCreateCategoryMutation } from "@/mutations/useCreateCategoryMutation";
import { NewCategoryFormFieldset } from "@/components/createForm/categories/NewCategoryFormFieldset";
import { TheButton } from "@/Shared/TheButton";

import { validateCategory as VALIDATE_CATEGORY } from "@/utils/validateCategory";
import { useSuccess } from "@/hooks/useSuccess";

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
		const { newErrors, isSuccess: noError } = VALIDATE_CATEGORY(formState);
		setErrors(newErrors);
		setSuccess(noError);

		if (!success) {
			setSubmitClicked(true);
		} else if (success) {
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
		}
	};

	const navigate = useNavigate();
	const GO_TO_CREATE_PART = () => {
		const lastCategory = categories[categories.length - 1];
		navigate({ to: `/options/category/${lastCategory.id}/newPart` });
	};

	const SEND_FORM = () => formRef.current?.requestSubmit();
	return (
		<>
			<form
				ref={formRef}
				onSubmit={HANDLE_SUBMIT}
				className={`formStyled h-[${isSuccess ? 400 : 330}px]`}
			>
				<legend className="font-bold text-[30px]">Nowa kategoria: </legend>
				<NewCategoryFormFieldset
					onChange={HANDLE_CHANGE}
					formState={formState}
					errors={errors}
					disabled={isSuccess}
				/>
				<TheButton
					onClick={SEND_FORM}
					disabled={isSuccess}
					btnLabel="Dodaj kategorię"
					type="submit"
				></TheButton>
				{isSuccess && (
					<div className="w-[100%] text-center text-[20px]">
						<p className="py-5">Kategoria {name} została dodana.</p>
						<TheButton
							type="button"
							btnLabel="Dodaj opcję"
							onClick={GO_TO_CREATE_PART}
						/>
					</div>
				)}
			</form>
		</>
	);
};
