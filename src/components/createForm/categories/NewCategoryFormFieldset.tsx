import { NewCategoryFormFieldsetProps } from "@/types";
import { TheInput } from "@/Shared/TheInput";
import { FieldErrors } from "@/Shared/FieldErrors";

export const NewCategoryFormFieldset = ({
	onChange,
	formState,
	errors,
	disabled,
}: NewCategoryFormFieldsetProps) => {
	const { name, identifier } = formState;
	return (
		<>
			<TheInput
				label="Nazwa"
				type="text"
				name="name"
				placeholder="nazwa kategorii"
				value={name}
				onChange={onChange}
				disabled={disabled}
			/>
			<FieldErrors errors={errors.name} />
			<TheInput
				label="Identyfikator"
				type="text"
				name="identifier"
				placeholder="identyfikator kategorii"
				value={identifier}
				onChange={onChange}
				disabled={disabled}
			/>
			<FieldErrors errors={errors.identifier} />
		</>
	);
};
