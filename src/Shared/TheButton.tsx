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
	const backgroundColor = disabled
		? "bg-theme-light-gray-color"
		: "bg-theme-additional-color";
	const textColor = disabled
		? "text-theme-dark-gray-color"
		: "text-theme-dark-color";
	const shadowColor = disabled
		? "shadow-disabledElement"
		: "shadow-additionalColorkBorder";

	return (
		<button
			color="transparent"
			type={type}
			disabled={disabled}
			onClick={onClick}
			className={`py-2 px-4 rounded-xl hover:font-bold ${backgroundColor} ${textColor} ${shadowColor}`}
		>
			{btnLabel}
		</button>
	);
};
