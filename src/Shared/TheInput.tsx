import { FormChangeEvent } from "@/types";

type TheInputProps = {
	label: string;
	type: string;
	name: string;
	placeholder: string;
	value: string | number;
	onChange: (e: FormChangeEvent) => void;
	disabled?: boolean;
};

export const TheInput = ({
	label,
	type,
	name,
	placeholder,
	value,
	onChange,
	disabled,
}: TheInputProps) => {
	const backgroundColor = disabled
		? "bg-theme-light-gray-color"
		: "bg-theme-lightblue-color";
	const textColor = disabled
		? "text-theme-dark-gray-color"
		: "text-theme-dark-color";

	return (
		<div className=" flex flex-col items-center ">
			<label>{label}</label>
			<input
				disabled={disabled}
				type={type}
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				className={`border-[4px] rounded-xl text-center focus:outline-none focus:ring-0 focus:border-theme-additional-color p-[5px] w-[100%] ${backgroundColor} ${textColor}`}
			/>
		</div>
	);
};
