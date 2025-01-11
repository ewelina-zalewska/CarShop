import { CategoryFormErrors, CategoryForm } from "@/types";

export const validateCategory = (categoryForm: CategoryForm) => {
	const { name, identifier } = categoryForm;

	let isSuccess = true;
	const newErrors: CategoryFormErrors = {
		name: [],
		identifier: [],
	};

	if (!name.trim()) {
		newErrors.name.push("Category name is required.");
	} else if (name.length < 3) {
		newErrors.name.push("Category name must be at least 3 characters long.");
	}

	if (!identifier.trim()) {
		newErrors.identifier.push("Identifier is required.");
	} else if (identifier.length < 3) {
		newErrors.identifier.push("Identifier be at least 3 characters long.");
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
