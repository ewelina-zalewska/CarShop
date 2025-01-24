import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/HomePage";
import { DataLoading } from "@/Shared/DataLoading";
import { TheError } from "@/Shared/TheError";
import { PageNotFound } from "@/Shared/PageNotFound";

export const Route = createFileRoute("/")({
	component: HomePage,
	notFoundComponent: () => PageNotFound("Nie znaleziono strony."),
	pendingComponent: DataLoading,
	errorComponent: TheError,
});
