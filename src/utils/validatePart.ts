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
		newErrors.name.push("Nazwa opcji jest wymagana.");
	} else if (name.length < 3) {
		newErrors.name.push("Podaj przynajmniej 3 znaki.");
	}

	if (price < 0) {
		newErrors.price.push("Cena musi być większa lub równa 0.");
	}

	if (!partId.trim()) {
		newErrors.partId.push("Identyfikator jest wymagany.");
	} else if (partId.length < 3) {
		newErrors.partId.push("Podaj przynajmniej 3 znaki.");
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
