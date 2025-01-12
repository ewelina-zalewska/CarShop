import { createFileRoute } from "@tanstack/react-router";

const WrongOptionsPlace = () => {
	return (
		<div>
			<h1>Such option does not exist.</h1>
			<p> Did you want to go to "/create/body"?</p>
		</div>
	);
};

export const Route = createFileRoute("/_formWrapper/creator/$")({
	component: WrongOptionsPlace,
});
