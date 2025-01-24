import { createLazyFileRoute } from "@tanstack/react-router";
import { CreatorHomePage } from "@/components/form/CreatorHomePage";
import { DataLoading } from "@/Shared/DataLoading";
import { TheError } from "@/Shared/TheError";
import { PageNotFound } from "@/Shared/PageNotFound";

export const Route = createLazyFileRoute("/creator")({
	component: CreatorHomePage,
	notFoundComponent: () => PageNotFound("Nie znaleziono formularza"),
	pendingComponent: DataLoading,
	errorComponent: TheError,
});
