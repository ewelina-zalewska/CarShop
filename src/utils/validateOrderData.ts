import { OrderDataFormErrors, OrderDataForm } from "@/types";

export const validateOrderData = (orderDataForm: OrderDataForm) => {
	const { firstName, lastName, email } = orderDataForm;

	let isSuccess = true;
	const newErrors: OrderDataFormErrors = {
		firstName: [],
		lastName: [],
		email: [],
	};

	if (!firstName.trim()) {
		newErrors.firstName.push("Imię jest wymagane.");
	} else if (firstName.length < 2) {
		newErrors.firstName.push("Podaj przynajmniej 2 znaki.");
	}

	if (!lastName.trim()) {
		newErrors.lastName.push("Nazwisko jest wymagane.");
	} else if (lastName.length < 2) {
		newErrors.lastName.push("Podaj przynajmniej 2 znaki.");
	}

	if (!email.trim()) {
		newErrors.email.push("Email jest wymagany.");
	}

	if (
		!firstName.trim() ||
		firstName.length < 2 ||
		!lastName.trim() ||
		lastName.length < 2 ||
		!email.trim()
	) {
		isSuccess = false;
	}
	return { newErrors, isSuccess };
};
