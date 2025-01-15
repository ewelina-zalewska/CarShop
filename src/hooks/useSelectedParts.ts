import { useFormStore } from "@/store/useFormStore";
import { selectedPart } from "@/types";
import { useEffect, useState } from "react";
import { useShallow } from "zustand/shallow";

export const useSelectedParts = () => {
	const [selectedParts, setSelectedParts] = useState<selectedPart[]>([]);

	const { form } = useFormStore(
		useShallow((state) => ({
			form: state.form,
		})),
	);

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

	return selectedParts;
};
