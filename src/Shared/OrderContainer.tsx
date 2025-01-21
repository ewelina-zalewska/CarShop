import { ReactNode } from "react";

type OrderContainernProps = {
	children: ReactNode;
};

export const OrderContainer = ({ children }: OrderContainernProps) => {
	return (
		<div className="shadow-darkBorder h-[550px] w-[300px] text-[20px] flex flex-col justify-between bg-theme-lightblue-color rounded-xl text-theme-dark-color p-6">
			{children}
		</div>
	);
};
