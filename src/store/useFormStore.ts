import { create } from "zustand";

type FormState = {
	form: {
		partValue: string;
	};
};

type FormActions = {
	setFormData: (payload: setFormDataAction) => void;
};

type setFormDataAction = {
	partValue: string;
};

const initialState: FormState = {
	form: {
		partValue: "",
	},
};

export const useFormStore = create<FormState & FormActions>()((set) => ({
	...initialState,
	setFormData: (payload: setFormDataAction) =>
		set({
			form: payload,
		}),
}));
