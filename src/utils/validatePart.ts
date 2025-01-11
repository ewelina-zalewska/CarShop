import { PartFormErrors, PartForm } from "@/types";

export const validatePart = (partForm: PartForm) => {
	const { name, price, partId } = partForm;

	let isSuccess = true;
	const newErrors: PartFormErrors = {
		name: [],
		price: [],
		partId: [],
	};

	if (!name.trim()) {
		newErrors.name.push("Part name is required.");
	} else if (name.length < 3) {
		newErrors.name.push("Part name must be at least 3 characters long.");
	}

	if (price < 0) {
		newErrors.price.push("Price must be greater than or equal to 0.");
	}

	if (!partId.trim()) {
		newErrors.partId.push("Identifier is required.");
	} else if (partId.length < 3) {
		newErrors.partId.push("Identifier must be at least 3 characters long.");
	}

	if (
		!name.trim() ||
		name.length < 3 ||
		!partId.trim() ||
		partId.length < 3 ||
		!partId.trim()
	) {
		isSuccess = false;
	}
	return { newErrors, isSuccess };
};
