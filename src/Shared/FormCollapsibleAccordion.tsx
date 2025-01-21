import { FormEvent, ReactNode, RefObject } from "react";

type FormCollapsibleAccordionProps = {
	children?: ReactNode;
	formRef?: RefObject<HTMLFormElement>;
	onSubmit: (e: FormEvent) => void;
};

export const FormCollapsibleAccordion = ({
	children,
	formRef,
	onSubmit,
}: FormCollapsibleAccordionProps) => {
	return (
		<form
			ref={formRef}
			onSubmit={onSubmit}
			className=" mt-[40px] lg:ml-[15%] lg:mt-[15%] h-[150px] lg:w-[300px] flex flex-col justify-between items-center text-theme-light-color text-[20px]"
		>
			{children}
		</form>
	);
};
