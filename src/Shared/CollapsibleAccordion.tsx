import { ReactNode } from "react";

type FormCollapsibleAccordionProps = {
	children: ReactNode;
};

export const FormCollapsibleAccordion = ({
	children,
}: FormCollapsibleAccordionProps) => {
	return <div>{children}</div>;
};
