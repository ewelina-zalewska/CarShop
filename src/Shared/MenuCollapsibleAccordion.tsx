import { ReactNode } from "react";
import carImage from "@/assets/images/car.webp";

type FormCollapsibleAccordionProps = {
	title?: string;
	children?: ReactNode;
};

export const MenuCollapsibleAccordion = ({
	title,
	children,
}: FormCollapsibleAccordionProps) => {
	return (
		<header className="z-50 lg:absolute top-0 left-0 lg:w-[300px] lg:h-[200px] lg:text-theme-dark-color text-theme-dark-color h-auto p-[30px] lg:p-1 text-center lg:text-left bg-theme-lightblue-color lg:bg-theme-transparent-color text-[20px]">
			<div className="lg:flex lg:gap-3 lg:items-center lg:ml-5">
				<img
					className="lg:inline-block hidden lg:h-9 "
					src={carImage}
					alt="car"
				/>
				<h1 className="bg-theme-dark-color text-[30px] lg:text-[24px] mb-4 rounded-t-[20px] text-theme-lightblue-color lg:bg-theme-transparent-color lg:text-theme-dark-color lg:mt-4 lg:mb-0">
					{title}
				</h1>
				<img className="inline lg:hidden" src={carImage} alt="car" />
			</div>
			<nav className="pt-[30px] lg:text-[15px] xl:text-[20px]">{children}</nav>
		</header>
	);
};
