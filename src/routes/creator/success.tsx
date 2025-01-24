import { createFileRoute, Outlet } from "@tanstack/react-router";

const CreateIndex = () => {
	return <Outlet />;
};

export const Route = createFileRoute("/creator/success")({
	component: CreateIndex,
});
