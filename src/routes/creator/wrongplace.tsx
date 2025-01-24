import { createFileRoute } from "@tanstack/react-router";
import { WrongPlace } from "@/Shared/WrongPlace";

export const Route = createFileRoute("/creator/wrongplace")({
	component: WrongPlace,
});
