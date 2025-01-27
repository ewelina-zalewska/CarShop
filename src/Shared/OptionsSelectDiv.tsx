﻿type OptionsSelectDivProps = {
	title: string;
};

export const OptionsSelectDiv = ({ title }: OptionsSelectDivProps) => {
	return (
		<div className="text-theme-light-color p-[30px] lg:pt-[30%] lg:pl-[10%]">
			<p>{title}</p>
		</div>
	);
};
