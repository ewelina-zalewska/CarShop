import { createFileRoute } from "@tanstack/react-router";
import { CreateFormMain } from "@/components/createForm/CreateFormMain";

export const Route = createFileRoute("/_optionWrapper")({
	component: CreateFormMain,
});
