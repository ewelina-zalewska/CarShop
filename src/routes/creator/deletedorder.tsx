import { createFileRoute } from "@tanstack/react-router";
import { DeleteConfirmation } from "@/components/form/OrderData/TheSuccess/DeleteConfirmation";
import { DataLoading } from "@/Shared/DataLoading";
import { TheError } from "@/Shared/TheError";

export const Route = createFileRoute("/creator/deletedorder")({
	component: DeleteConfirmation,
	pendingComponent: DataLoading,
	errorComponent: TheError,
});
