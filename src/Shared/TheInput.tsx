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
		<>
			<legend>{legend}</legend>
			<input
				type={type}
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				className="border-[4px] rounded-xl text-center text-theme-dark-color  focus:outline-none focus:ring-0 focus:border-theme-additional-color p-[5px]"
			/>
		</>
	);
};
