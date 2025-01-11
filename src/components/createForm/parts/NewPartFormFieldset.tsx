import { PartForm, FormChangeEvent } from "@/types";

type NewPartFormFieldset = {
	onChange: (e: FormChangeEvent) => void;
	formState: PartForm;
};

export const NewPartFormFieldset = ({
	onChange,
	formState,
}: NewPartFormFieldset) => {
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
			</div>
		</>
	);
};
