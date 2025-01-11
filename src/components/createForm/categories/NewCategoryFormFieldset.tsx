import { NewCategoryFormFieldsetProps } from "@/types";
import { FieldErrors } from "@/Shared/FieldErrors";

export const NewCategoryFormFieldset = ({
	onChange,
	formState,
	errors,
}: NewCategoryFormFieldsetProps) => {
	const { name, identifier } = formState;
	return (
		<>
			<div>
				<legend>Nazwa</legend>
				<input
					type="text"
					name="name"
					placeholder="nazwa kategorii"
					value={name}
					onChange={onChange}
				/>
				<FieldErrors errors={errors.name} />
			</div>
			<div>
				<legend>Identyfikator</legend>
				<input
					type="text"
					name="identifier"
					placeholder="identyfikator kategorii"
					value={identifier}
					onChange={onChange}
				/>
				<FieldErrors errors={errors.identifier} />
			</div>
		</>
	);
};
