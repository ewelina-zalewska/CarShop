import { FormChangeEvent } from "@/types";

type TheInputProps = {
	legend: string;
	type: string;
	name: string;
	placeholder: string;
	value: string | number;
	onChange: (e: FormChangeEvent) => void;
};

export const TheInput = ({
	legend,
	type,
	name,
	placeholder,
	value,
	onChange,
}: TheInputProps) => {
	return (
		<div>
			<legend>{legend}</legend>
			<input
				type={type}
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
		</div>
	);
};
