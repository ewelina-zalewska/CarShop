import { useEffect, useState } from "react";
import { CategoryResponse } from "@/types";

type useSelectedPartProps = {
	category: CategoryResponse;
	form: { partValue: string };
};

export const useSelectedPart = ({ category, form }: useSelectedPartProps) => {
	const [selectedPart, setSelectedPart] = useState<{
		name: string;
		price: string;
		category: string;
	}>({
		name: "",
		price: "",
		category: "",
	});

	useEffect(() => {
		const selectPart = localStorage.getItem(category.name);
		if (selectPart) {
			const selectedPartParsed = JSON.parse(selectPart);
			setSelectedPart(selectedPartParsed);
		}
	}, [form.partValue, category.name]);

	return selectedPart;
};
