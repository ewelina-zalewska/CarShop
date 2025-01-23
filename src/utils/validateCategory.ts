import { CategoryFormErrors, CategoryForm } from "@/types";

export const validateCategory = (categoryForm: CategoryForm) => {
	const { name, identifier } = categoryForm;

	let isSuccess = true;
	const newErrors: CategoryFormErrors = {
		name: [],
		identifier: [],
	};

	if (!name.trim()) {
		newErrors.name.push("Nazwa kategorii jest wymagana.");
	} else if (name.length < 3) {
		newErrors.name.push("Podaj przynajmniej 3 znaki.");
	}

	if (!identifier.trim()) {
		newErrors.identifier.push("Identyfikator jest wymagany.");
	} else if (identifier.length < 3) {
		newErrors.identifier.push("Podaj przynajmniej 3 znaki.");
	}

	if (
		!name.trim() ||
		name.length < 3 ||
		!identifier.trim() ||
		identifier.length < 3
	) {
		isSuccess = false;
	}
	return { newErrors, isSuccess };
};
