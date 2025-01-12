import { createFileRoute } from "@tanstack/react-router";
import { TheSuccess } from "@/components/form/TheSuccess";

export const Route = createFileRoute("/_formWrapper/creator/success")({
	component: TheSuccess,
});
