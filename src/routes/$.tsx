import { createFileRoute, Outlet, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";

const WrongPlace = () => {
	const intervalTime: number = 3000;
	const { _splat } = Route.useParams();

	const navigate = useNavigate();

	useEffect(() => {
		const interval = setTimeout(() => {
			navigate({ to: "/" });
		}, intervalTime);

		return () => {
			clearTimeout(interval);
		};
	}, [navigate]);

	return (
		<div>
			<h1>This is a wrong place, you need go to back.</h1>
			<p>You tried to load {_splat} </p>
			<Outlet />
		</div>
	);
};

export const Route = createFileRoute("/$")({
	component: WrongPlace,
});
