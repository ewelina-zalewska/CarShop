import { createFileRoute } from "@tanstack/react-router";

const WrongPlace = () => {
	return (
		<div>
			<h1>Ups...something went wrong.</h1>
		</div>
	);
};

export const Route = createFileRoute("/creator/wrongplace")({
	component: WrongPlace,
});
