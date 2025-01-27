import { useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";

export const DeleteConfirmation = () => {
	const time = 3000;
	const navigate = useNavigate();
	useEffect(() => {
		const timer = setTimeout(() => {
			navigate({ to: `/` });
		}, time);

		return () => {
			clearTimeout(timer);
		};
	}, []);

	return (
		<div className="absolute top-0 left-0 w-full h-screen bg-theme-dark-color">
			<p className="text-[30px] text-theme-lightblue-color text-center mt-[40vh]">
				Zamówienie zostało usunięte.
			</p>
		</div>
	);
};
