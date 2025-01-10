import { createFileRoute } from "@tanstack/react-router";
import { WrongPlace } from "@/components/wrongPlaces/WrongPlace";

export const Route = createFileRoute("/$")({
	component: WrongPlace,
});
