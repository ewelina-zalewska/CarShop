import { createFileRoute } from "@tanstack/react-router";
import { TheShipping } from "@/components/form/TheShipping";

export const Route = createFileRoute("/_formWrapper/creator/shipping")({
	component: TheShipping,
});
