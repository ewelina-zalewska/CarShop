import { createFileRoute } from "@tanstack/react-router";
import { TheSummary } from "@/components/form/TheSummary";

export const Route = createFileRoute("/_formWrapper/creator/summary")({
	component: TheSummary,
});
