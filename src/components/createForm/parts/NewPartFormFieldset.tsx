import { NewPartFormFieldsetProps } from "@/types";
import { FieldErrors } from "@/Shared/FieldErrors";

export const NewPartFormFieldset = ({
	onChange,
	formState,
	errors,
}: NewPartFormFieldsetProps) => {
	const { name, price, partId } = formState;
	return (
		<>
			<div>
				<legend>Nazwa</legend>
				<input
					type="text"
					name="name"
					placeholder="nazwa opcji"
					value={name}
					onChange={onChange}
				/>
				<FieldErrors errors={errors.name} />
			</div>
			<div>
				<legend>Identyfikator</legend>
				<input
					type="text"
					name="partId"
					placeholder="identyfikator opcji"
					value={partId}
					onChange={onChange}
				/>
				<FieldErrors errors={errors.partId} />
			</div>
			<div>
				<legend>Cena</legend>
				<input
					type="number"
					name="price"
					placeholder="cena"
					value={price}
					onChange={onChange}
				/>
				<FieldErrors errors={errors.price} />
			</div>
		</>
	);
};
