import { createFileRoute } from "@tanstack/react-router";
import { WrongOptionsPlace } from "@/components/wrongPlaces/WrongOptionsPlace";

export const Route = createFileRoute("/_optionWrapper/options/$")({
	component: WrongOptionsPlace,
});
