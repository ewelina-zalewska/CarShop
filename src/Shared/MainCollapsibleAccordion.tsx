import { ReactNode } from "react";

type FormCollapsibleAccordionProps = {
	children?: ReactNode;
};

export const MainCollapsibleAccordion = ({
	children,
}: FormCollapsibleAccordionProps) => {
	return (
		<main className="lg:absolute lg:top-0 lg:left-0 h-auto w-full lg:flex pb-[100px] lg:pb-0 text-theme-lightblue-color">
			{children}
		</main>
	);
};
