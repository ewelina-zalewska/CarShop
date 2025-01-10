import { MouseEventHandler } from "react";

type ButtonProps = {
	type?: "submit" | "reset" | "button";
	disabled?: boolean;
	btnLabel: string;
	onClick: MouseEventHandler<HTMLButtonElement>;
};

export const TheButton = ({
	type,
	disabled,
	btnLabel,
	onClick,
}: ButtonProps) => {
	return (
		<button
			color="transparent"
			type={type}
			disabled={disabled}
			onClick={onClick}
		>
			{btnLabel}
		</button>
	);
};
