import { WrongPlace } from "@/Shared/WrongPlace";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/creator/$")({
	component: WrongPlace,
});
