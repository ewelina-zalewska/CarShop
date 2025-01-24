import { createFileRoute, Outlet } from "@tanstack/react-router";

const CreateIndex = () => {
	return (
		<div>
			<Outlet />
		</div>
	);
};

export const Route = createFileRoute("/creator/success")({
	component: CreateIndex,
});
