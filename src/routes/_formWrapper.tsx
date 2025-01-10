import { createFileRoute } from "@tanstack/react-router";
import { FormCollapsibleAccordion } from "@/Shared/FormCollapsibleAccordion";

export const Route = createFileRoute("/_formWrapper")({
	component: FormCollapsibleAccordion,
});
