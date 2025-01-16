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
		newErrors.firstName.push("First name is required.");
	} else if (firstName.length < 2) {
		newErrors.firstName.push("First name must be at least 2 characters long.");
	}

	if (!lastName.trim()) {
		newErrors.lastName.push("Last name is required.");
	} else if (lastName.length < 2) {
		newErrors.lastName.push("Last name must be at least 2 characters long.");
	}

	if (!email.trim()) {
		newErrors.email.push("Email is required.");
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
