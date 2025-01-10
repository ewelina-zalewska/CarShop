import { CategoryForm, FormChangeEvent } from "@/types";

type NewCategoryFormFieldset = {
	onChange: (e: FormChangeEvent) => void;
	formState: CategoryForm;
};

export const NewCategoryFormFieldset = ({
	onChange,
	formState,
}: NewCategoryFormFieldset) => {
	const { name, identifier } = formState;
	return (
		<>
			<input
				type="text"
				name="name"
				placeholder="nazwa kategorii"
				value={name}
				onChange={onChange}
			/>
			<input
				type="text"
				name="identifier"
				placeholder="identyfikator kategorii"
				value={identifier}
				onChange={onChange}
			/>
		</>
	);
};
