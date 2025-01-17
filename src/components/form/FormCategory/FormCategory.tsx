import { useEffect } from "react";
import { useShallow } from "zustand/shallow";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { categoriesQueryOptions } from "@/queries/categoriesQuery";
import { categoryQueryOptions } from "@/queries/categoryQuery";
import { useOrderStore } from "@/store/useOrderStore";
import { useCreatorCategoryId } from "@/hooks/useCreatorCategoryId";
import { useSelectedPart } from "@/hooks/useSelectedPart";
import { useInput } from "@/hooks/useInput";
import { useSelectedParts } from "@/hooks/useSelectedParts";
import { TheStepper } from "@/components/form/TheStepper";
import { FormCategoryPreviousCategory } from "@/components/form/FormCategory/FormCategoryPreviousCategory";
import { FormCategoryNextCategory } from "@/components/form/FormCategory/FormCategoryNextCategory";
import { FormCategoryTotalPrice } from "@/components/form/FormCategory/FormCategoryTotalPrice";
import { TheButton } from "@/Shared/TheButton";
import { TheRadio } from "@/Shared/TheRadio";

export const FormCategory = () => {
	const categoryId = useCreatorCategoryId();
	const selectedParts = useSelectedParts();

	const { data: categories } = useSuspenseQuery(categoriesQueryOptions);
	const { data: category, isPending } = useSuspenseQuery(
		categoryQueryOptions(categoryId),
	);

	const { form, setFormData } = useOrderStore(
		useShallow((state) => ({
			form: state.form,
			setFormData: state.setFormData,
		})),
	);

	const partInput = useInput(form.partValue);

	useEffect(() => {
		category.parts.map((part) => {
			if (part.id === partInput.value) {
				const selectedPart = {
					name: part.name,
					price: part.price,
					category: category.name,
				};
				localStorage.setItem(category.name, JSON.stringify(selectedPart));

				setFormData({
					partValue: part.name,
				});
			}
		});
	}, [partInput.value]);

	const selectedPart = useSelectedPart({ category, form });
	const lastCategory = category.position === categories.length;
	const fullfilledForm = categories.length === selectedParts.length;

	const navigate = useNavigate();
	const NEXT_STEP = () => navigate({ to: "/creator/orderdata" });

	if (isPending) return <p>Loading...</p>;
	if (localStorage.getItem("form") !== "started")
		return <p>Go back and click the button START.</p>;
	return (
		<>
			<TheStepper categories={categories} selectedCategory={categoryId} />

			<div>
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

				{lastCategory && (
					<>
						{!fullfilledForm && (
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
			</div>
		</>
	);
};
