import { FormEvent, useEffect } from "react";
import { useShallow } from "zustand/shallow";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getRouteApi, Link } from "@tanstack/react-router";
import { categoriesQueryOptions } from "@/queries/categoriesQuery";
import { categoryQueryOptions } from "@/queries/categoryQuery";
import { useFormStore } from "@/store/useFormStore";
import { useInput } from "@/hooks/useInput";
import { useNextCategory } from "@/hooks/useNextCategory";
import { usePreviousCategory } from "@/hooks/usePreviousCategory";
import { TheStepper } from "@/components/form/TheStepper";
import { TheButton } from "@/Shared/TheButton";
import { TheRadio } from "@/Shared/TheRadio";

const categoryRoute = getRouteApi("/_formWrapper/creator/$categoryId");

export const FormCategory = () => {
	const { categoryId } = categoryRoute.useParams();

	const { data: categories } = useSuspenseQuery(categoriesQueryOptions);
	const { data: category } = useSuspenseQuery(categoryQueryOptions(categoryId));
	const { nextCategory } = useNextCategory({
		category,
		categories,
		categoryId,
	});
	const { previousCategory } = usePreviousCategory({
		category,
		categories,
		categoryId,
	});

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
				localStorage.setItem(category.name, part.name);
				setFormData({
					partValue: part.name,
				});
			}
		});
	}, [partInput.value]);

	const NEXT_STEP = () => console.log(partInput.value);
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
							checked={
								localStorage.getItem(category.name) === part.name ? true : false
							}
						/>
					))}
				</fieldset>

				{category.position !== 1 && (
					<Link
						to="/creator/$categoryId"
						params={{
							categoryId: previousCategory,
						}}
					>
						COFNIJ
					</Link>
				)}

				{category.position === categories.length ? (
					<>
						{categories.length !== localStorage.length && (
							<p>Proszę zaznaczyć jedną z opcji z każdej kategorii</p>
						)}
						<TheButton
							type="submit"
							onClick={NEXT_STEP}
							btnLabel="ZAPISZ"
							disabled={categories.length !== localStorage.length}
						/>
					</>
				) : (
					<Link to="/creator/$categoryId" params={{ categoryId: nextCategory }}>
						DALEJ
					</Link>
				)}
			</form>
		</>
	);
};
