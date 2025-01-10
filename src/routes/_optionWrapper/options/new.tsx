import { NewCategory } from "@/components/createForm/categories/NewCategory";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_optionWrapper/options/new")({
	component: NewCategory,
});
