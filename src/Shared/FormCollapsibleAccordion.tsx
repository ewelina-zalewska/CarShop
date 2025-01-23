import { FormEvent, ReactNode, RefObject } from "react";

type FormCollapsibleAccordionProps = {
	children?: ReactNode;
	formRef?: RefObject<HTMLFormElement>;
	onSubmit: (e: FormEvent) => void;
	height: number;
};

export const FormCollapsibleAccordion = ({
	children,
	formRef,
	onSubmit,
	height,
}: FormCollapsibleAccordionProps) => {
	return (
		<form
			ref={formRef}
			onSubmit={onSubmit}
			className="mt-[50px] lg:ml-[25%] lg:mt-[8%]  lg:w-[350px] flex flex-col justify-between items-center text-theme-light-color text-[20px]"
			style={{ height: `${height}px` }}
		>
			{children}
		</form>
	);
};
