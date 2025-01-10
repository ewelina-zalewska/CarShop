import { createFileRoute } from "@tanstack/react-router";
import { CreateFormCollapsibleAccordion } from "@/Shared/CreateFormCollapsibleAccordion";

export const Route = createFileRoute("/_optionWrapper")({
	component: CreateFormCollapsibleAccordion,
});
