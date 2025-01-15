import { FormEvent, useEffect } from "react";
import { useShallow } from "zustand/shallow";
import { useSuspenseQuery } from "@tanstack/react-query";
import { categoriesQueryOptions } from "@/queries/categoriesQuery";
import { categoryQueryOptions } from "@/queries/categoryQuery";
import { useFormStore } from "@/store/useFormStore";
import { useCreatorCategoryId } from "@/hooks/useCreatorCategoryId";
import { useSelectedPart } from "@/hooks/useSelectedPart";
import { useInput } from "@/hooks/useInput";
import { TheStepper } from "@/components/form/TheStepper";
import { FormCategoryPreviousCategory } from "@/components/form/FormCategoryPreviousCategory";
import { FormCategoryNextCategory } from "@/components/form/FormCategoryNextCategory";
import { FormCategoryTotalPrice } from "@/components/form/FormCategoryTotalPrice";
import { TheButton } from "@/Shared/TheButton";
import { TheRadio } from "@/Shared/TheRadio";

export const FormCategory = () => {
	const categoryId = useCreatorCategoryId();

	const { data: categories } = useSuspenseQuery(categoriesQueryOptions);
	const { data: category } = useSuspenseQuery(categoryQueryOptions(categoryId));

	const { form, setFormData } = useFormStore(
		useShallow((state) => ({
			form: state.form,
			setFormData: state.setFormData,
		})),
	);

	const partInput = useInput(form.partValue);
	const HANDLE_SUBMIT = (e: FormEvent) => {
		e.preventDefault();
		console.log(partInput.value);
	};

	useEffect(() => {
		category.parts.map((part) => {
			if (part.id === partInput.value) {
				const selectedPart = { name: part.name, price: part.price };
				localStorage.setItem(category.name, JSON.stringify(selectedPart));

				setFormData({
					partValue: part.name,
				});
			}
		});
	}, [partInput.value]);

	const NEXT_STEP = () => console.log(form.partValue);
	const selectedPart = useSelectedPart({ category, form });
	return (
		<>
			<TheStepper categories={categories} selectedCategory={categoryId} />

			<form onSubmit={HANDLE_SUBMIT}>
				<fieldset>
					<legend>{category.name}</legend>
					{category.parts.map((part) => (
						<TheRadio
							key={part.id}
							label={part.name}
							name={category.name}
							value={part.id}
							onChange={partInput.onChange}
							checked={selectedPart.name === part.name ? true : false}
						/>
					))}
				</fieldset>
				<FormCategoryTotalPrice />
				<FormCategoryPreviousCategory
					category={category}
					categories={categories}
					categoryId={categoryId}
				/>

				{category.position === categories.length && (
					<>
						{categories.length !== localStorage.length / 2 - 1 && (
							<p>Proszę zaznaczyć jedną z opcji z każdej kategorii</p>
						)}
						<TheButton
							type="submit"
							onClick={NEXT_STEP}
							btnLabel="ZAPISZ"
							disabled={categories.length !== localStorage.length - 1}
						/>
					</>
				)}

				<FormCategoryNextCategory
					category={category}
					categories={categories}
					categoryId={categoryId}
				/>
			</form>
		</>
	);
};
