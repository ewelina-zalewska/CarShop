import { ReactNode } from "react";

type FormCollapsibleAccordionProps = {
	children?: ReactNode;
};

export const MainCollapsibleAccordion = ({
	children,
}: FormCollapsibleAccordionProps) => {
	return (
		<main className="lg:absolute lg:top-0 lg:left-0 h-full w-full lg:flex">
			{children}
		</main>
	);
};
