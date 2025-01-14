import { useEffect, useState } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Outlet, useNavigate } from "@tanstack/react-router";
import { categoriesQueryOptions } from "@/queries/categoriesQuery";
import { CategoryResponse } from "@/types";
import { useGetStarted } from "@/hooks/useGetStarted";
import { TheButton } from "@/Shared/TheButton";

export const CreatorHomePage = () => {
	const { data: categories } = useSuspenseQuery(categoriesQueryOptions);
	const [firstCategory, setFirstCategory] = useState<CategoryResponse>();
	const form = useGetStarted();

	useEffect(() => {
		const category = categories.find((category) => category.position === 1);
		if (!category) return;
		setFirstCategory(category);
	}, [categories]);

	const navigate = useNavigate();
	if (!firstCategory) return <p> No form ... </p>;

	const GO_TO_FORM = () => {
		if (form.isStarted) {
			navigate({ to: `/` });
			localStorage.setItem("form", "closed");
			form.setForm("closed");
			return;
		}
		navigate({ to: `/creator/${firstCategory.id}` });
		localStorage.setItem("form", "started");
		form.setForm("started");
	};

	return (
		<>
			{form.isClosed && (
				<div>
					<h1>Kreator auta</h1>
					<p>Przejdź do formularza klikając na start</p>
				</div>
			)}
			<TheButton
				btnLabel={form.isStarted ? "STOP" : "START"}
				onClick={GO_TO_FORM}
			/>
			<Outlet />
		</>
	);
};
