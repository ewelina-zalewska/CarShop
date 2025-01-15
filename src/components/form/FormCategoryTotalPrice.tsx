import { useEffect, useState } from "react";
import { useShallow } from "zustand/shallow";
import { selectedPart } from "@/types";
import { useFormStore } from "@/store/useFormStore";
import { useTotalprice } from "@/hooks/useTotalPrice";

export const FormCategoryTotalPrice = () => {
	const [selectedParts, setSelectedParts] = useState<selectedPart[]>([]);

	const { form } = useFormStore(
		useShallow((state) => ({
			form: state.form,
		})),
	);

	const totalPrice = useTotalprice(selectedParts);

	useEffect(() => {
		const partsToAdd: selectedPart[] = [];
		for (let i = 0; i < localStorage.length; i++) {
			const key = localStorage.key(i);
			if (key && key !== "form") {
				const selectParts = localStorage.getItem(key);
				if (selectParts) {
					const selectedPartsParsed: selectedPart = JSON.parse(selectParts);
					partsToAdd.push(selectedPartsParsed);
				}
			}
		}
		setSelectedParts(partsToAdd);
	}, [form.partValue]);

	return (
		<h3>
			Wartość zamówienia:
			{totalPrice}
		</h3>
	);
};
