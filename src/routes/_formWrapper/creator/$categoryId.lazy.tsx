import { createLazyFileRoute } from "@tanstack/react-router";
import { FormCategory } from "@/components/form/FormCategory";

export const Route = createLazyFileRoute("/_formWrapper/creator/$categoryId")({
	component: FormCategory,
});
