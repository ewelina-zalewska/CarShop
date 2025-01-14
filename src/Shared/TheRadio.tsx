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
			<label>
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
