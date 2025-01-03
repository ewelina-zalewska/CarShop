import { createFileRoute } from "@tanstack/react-router";

const SingleCategory = () => {
	const { createId } = Route.useParams();
	return (
		<div>
			<p>KATEGORIA: {createId}</p>
		</div>
	);
};

export const Route = createFileRoute("/_formWrapper/create/$createId")({
	component: SingleCategory,
});
