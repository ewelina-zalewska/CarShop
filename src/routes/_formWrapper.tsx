import { createFileRoute } from "@tanstack/react-router";
import { FormMain } from "@/components/form/FormMain";

export const Route = createFileRoute("/_formWrapper")({
	component: FormMain,
});
