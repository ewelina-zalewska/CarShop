import { useEffect } from "react";
import { Outlet, useNavigate } from "@tanstack/react-router";

export const WrongPlace = () => {
	const time: number = 3000;

	const navigate = useNavigate();

	useEffect(() => {
		const interval = setTimeout(() => {
			navigate({ to: "/" });
		}, time);

		return () => {
			clearTimeout(interval);
		};
	}, [navigate]);

	return (
		<div className="absolute top-0 left-0 w-full h-screen bg-theme-translucent-color">
			<h3 className="text-[30px] text-theme-error-color text-center mt-[40vh]">
				To jest zły adres. Wróć do strony głównej.
			</h3>
			<Outlet />
		</div>
	);
};
