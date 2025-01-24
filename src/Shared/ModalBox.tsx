import { ReactNode } from "react";

type ModalBoxProps = {
	children: ReactNode;
	width: number;
	height: number;
};

export const ModalBox = ({ children, width, height }: ModalBoxProps) => {
	return (
		<>
			<div className="shadow-blurredBorder z-100 fixed left-0 right-0 top-0 bottom-0 bg-theme-translucent-color flex justify-center items-center">
				<div
					className="bg-theme-lightblue-color text-theme-dark-color shadow-blurredBorder rounded-lg flex flex-col justify-evenly items-center text-[20px]"
					style={{
						width: `${width}px`,
						height: `${height}px`,
					}}
				>
					{children}
				</div>
			</div>
		</>
	);
};
