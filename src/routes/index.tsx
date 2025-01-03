import { createFileRoute, Outlet } from "@tanstack/react-router";

const Index = () => {
	return (
		<main>
			<p>Wybierz jedną z opcji menu.</p>
			<Outlet />
		</main>
	);
};

export const Route = createFileRoute("/")({
	component: Index,
});
