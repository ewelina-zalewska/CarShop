import { createFileRoute } from "@tanstack/react-router";

const CreateIndex = () => {
	return <div></div>;
};

export const Route = createFileRoute("/_formWrapper/create/")({
	component: CreateIndex,
});
