import { ReactNode } from "react";

type MainCollapsibleAccordionProps = {
	children?: ReactNode;
};

export const MainCollapsibleAccordion = ({
	children,
}: MainCollapsibleAccordionProps) => {
	return (
		<main className="lg:absolute lg:top-0 lg:left-0 w-full lg:flex lg:pb-0 text-theme-lightblue-color h-fit lg:h-screen overflow-y-auto">
			{children}
		</main>
	);
};
