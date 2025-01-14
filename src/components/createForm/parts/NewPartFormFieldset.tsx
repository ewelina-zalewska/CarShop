import { NewPartFormFieldsetProps } from "@/types";
import { TheInput } from "@/Shared/TheInput";
import { FieldErrors } from "@/Shared/FieldErrors";

export const NewPartFormFieldset = ({
	onChange,
	formState,
	errors,
}: NewPartFormFieldsetProps) => {
	const { name, price, partId } = formState;
	return (
		<>
			<TheInput
				legend="Nazwa"
				type="text"
				name="name"
				placeholder="nazwa opcji"
				value={name}
				onChange={onChange}
			/>
			<FieldErrors errors={errors.name} />
			<TheInput
				legend="dentyfikator"
				type="text"
				name="partId"
				placeholder="identyfikator opcji"
				value={partId}
				onChange={onChange}
			/>
			<FieldErrors errors={errors.partId} />

			<TheInput
				legend="Cena"
				type="number"
				name="price"
				placeholder="cena"
				value={price}
				onChange={onChange}
			/>
			<FieldErrors errors={errors.price} />
		</>
	);
};
