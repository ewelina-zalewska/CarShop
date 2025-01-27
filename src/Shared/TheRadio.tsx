import { ChangeEvent } from "react";

type TheRadioProps = {
	label: string;
	name: string;
	value: string;
	checked?: boolean;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const TheRadio = ({
	label,
	name,
	value,
	onChange,
	checked,
}: TheRadioProps) => {
	return (
		<>
			<label
				className={`p-2 mt-1 border border-theme-dark-color rounded-md ${checked ? "font-bold" : "font-normal"} `}
			>
				<input
					type="radio"
					name={name}
					value={value}
					onChange={onChange}
					checked={checked}
				/>
				{label}
			</label>
		</>
	);
};
