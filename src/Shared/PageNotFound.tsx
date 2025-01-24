export const PageNotFound = (title: string) => {
	return (
		<div className="absolute top-0 left-0 w-full h-screen bg-theme-transparent-color">
			<p className="text-[30px] text-theme-error-color text-center mt-[40vh]">
				Coś poszło nie tak...<br>{title}</br>
			</p>
		</div>
	);
};
