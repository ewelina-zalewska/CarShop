import { createFileRoute } from "@tanstack/react-router";
import { FormCategory } from "@/components/form/FormCategroy";

export const Route = createFileRoute("/_formWrapper/creator/form")({
	component: FormCategory,
});
