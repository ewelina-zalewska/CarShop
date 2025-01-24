import { NewCategory } from "@/components/createForm/categories/NewCategory";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/options/new")({
	component: NewCategory,
});
