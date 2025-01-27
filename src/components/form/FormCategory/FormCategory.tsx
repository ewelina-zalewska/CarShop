import { useEffect } from "react";
import { useShallow } from "zustand/shallow";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { categoriesQueryOptions } from "@/queries/categoriesQuery";
import { categoryQueryOptions } from "@/queries/categoryQuery";
import { useOrderStore } from "@/store/useOrderStore";
import { useCreatorCategoryId } from "@/hooks/useCreatorCategoryId";
import { useGetStarted } from "@/hooks/useGetStarted";
import { useSelectedPart } from "@/hooks/useSelectedPart";
import { useInput } from "@/hooks/useInput";
import { useSelectedParts } from "@/hooks/useSelectedParts";
import { TheStepper } from "@/components/form/TheStepper";
import { FormCategoryPreviousCategory } from "@/components/form/FormCategory/FormCategoryPreviousCategory";
import { FormCategoryNextCategory } from "@/components/form/FormCategory/FormCategoryNextCategory";
import { FormCategoryTotalPrice } from "@/components/form/FormCategory/FormCategoryTotalPrice";
import { TheButton } from "@/Shared/TheButton";
import { TheRadio } from "@/Shared/TheRadio";
import { WrongPlace } from "@/Shared/WrongPlace";

export const FormCategory = () => {
	const { isStarted, HANDLE_STOP } = useGetStarted();
	const categoryId = useCreatorCategoryId();
	const selectedParts = useSelectedParts();

	const { data: categories } = useSuspenseQuery(categoriesQueryOptions);
	const { data: category } = useSuspenseQuery(categoryQueryOptions(categoryId));

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

	const wrongPlace = localStorage.getItem("form") !== "started";

	return (
		<>
			{wrongPlace ? (
				<WrongPlace />
			) : (
				<div className="lg:fixed top-0 left-0 right-0 bottom-0 lg:bg-theme-translucent-color pb-[50px] overflow-y-auto z-[100]">
					<div className="flex lg:flex-row-reverse rounded-md justify-center lg:w-[800px] lg:min-h-[500px] bg-theme-dark-color text-theme-lightblue-color border-theme-error-color mx-auto mt-14">
						<TheStepper categories={categories} selectedCategory={categoryId} />
						<div className="lg:w-[80%] w-[60%] flex flex-col lg:text-[22px] text-[18px]">
							<div className="shadow-additionalColorkBorder bg-theme-lightblue-color text-theme-dark-color rounded-lg p-[20px]">
								<legend className="pb-3">{category.name}</legend>
								<div className="flex flex-col min-h-[250px]">
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
								</div>
								<FormCategoryTotalPrice />
							</div>
							<div className="p-2 flex justify-between ">
								<FormCategoryPreviousCategory
									category={category}
									categories={categories}
									categoryId={categoryId}
								/>
								{isStarted && (
									<div className="hidden lg:inline-block">
										<TheButton btnLabel={"Stop"} onClick={HANDLE_STOP} />
									</div>
								)}
								<FormCategoryNextCategory
									category={category}
									categories={categories}
									categoryId={categoryId}
								/>
							</div>
							{lastCategory && (
								<>
									{!fullfilledForm && (
										<p className="text-center text-theme-error-color p-3">
											Proszę zaznaczyć jedną z opcji z każdej kategorii.
										</p>
									)}
									<TheButton
										type="submit"
										onClick={NEXT_STEP}
										btnLabel="Zapisz"
										disabled={categories.length !== localStorage.length - 1}
									/>
								</>
							)}
						</div>
					</div>
				</div>
			)}
		</>
	);
};
