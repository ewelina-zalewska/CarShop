import { createFileRoute } from "@tanstack/react-router";
import { NewPart } from "@/components/createForm/parts/NewPart";
import { TheError } from "@/Shared/TheError";
import { DataLoading } from "@/Shared/DataLoading";

export const Route = createFileRoute("/options/category/$categoryId/newPart")({
	component: NewPart,
	pendingComponent: DataLoading,
	errorComponent: TheError,
});
