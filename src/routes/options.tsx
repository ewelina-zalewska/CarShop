import { createFileRoute } from "@tanstack/react-router";
import { OptionsList } from "@/components/createForm/OptionsList";
import { PageNotFound } from "@/Shared/PageNotFound";
import { DataLoading } from "@/Shared/DataLoading";
import { TheError } from "@/Shared/TheError";

export const Route = createFileRoute("/options")({
	component: OptionsList,
	notFoundComponent: () => PageNotFound("Nie znaleziono strony"),
	pendingComponent: DataLoading,
	errorComponent: TheError,
});
