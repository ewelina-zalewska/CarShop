import { create } from "zustand";

type FormState = {
	form: {
		partValue: string;
	};
	order: {
		orderMode: "show" | "hide";
	};
};

type FormActions = {
	setFormData: (payload: setFormDataAction) => void;
};
type OrderActions = {
	setOrderData: (payload: setOrderDataAction) => void;
};

type setFormDataAction = {
	partValue: string;
};

type setOrderDataAction = {
	orderMode: "show" | "hide";
};

const initialState: FormState = {
	form: {
		partValue: "",
	},
	order: {
		orderMode: "hide",
	},
};

export const useOrderStore = create<FormState & FormActions & OrderActions>()(
	(set) => ({
		...initialState,
		setFormData: (payload: setFormDataAction) =>
			set({
				form: payload,
			}),
		setOrderData: (payload: setOrderDataAction) =>
			set({
				order: payload,
			}),
	}),
);
