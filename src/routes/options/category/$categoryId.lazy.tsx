﻿import { createLazyFileRoute } from "@tanstack/react-router";
import { SingleCategory } from "@/components/createForm/categories/SingleCategory";
import { TheError } from "@/Shared/TheError";
import { DataLoading } from "@/Shared/DataLoading";
import { PageNotFound } from "@/Shared/PageNotFound";

export const Route = createLazyFileRoute("/options/category/$categoryId")({
	component: SingleCategory,
	notFoundComponent: () => PageNotFound("Nie znaleziono kategorii."),
	pendingComponent: DataLoading,
	errorComponent: TheError,
});
