import { NewCategoryFormFieldsetProps } from "@/types";
import { TheInput } from "@/Shared/TheInput";
import { FieldErrors } from "@/Shared/FieldErrors";

export const NewCategoryFormFieldset = ({
	onChange,
	formState,
	errors,
}: NewCategoryFormFieldsetProps) => {
	const { name, identifier } = formState;
	return (
		<>
			<TheInput
				legend="Nazwa"
				type="text"
				name="name"
				placeholder="nazwa kategorii"
				value={name}
				onChange={onChange}
			/>
			<FieldErrors errors={errors.name} />
			<TheInput
				legend="Identyfikator"
				type="text"
				name="identifier"
				placeholder="identyfikator kategorii"
				value={identifier}
				onChange={onChange}
			/>
			<FieldErrors errors={errors.identifier} />
		</>
	);
};
