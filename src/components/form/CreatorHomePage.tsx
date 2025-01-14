import { categoriesQueryOptions } from "@/queries/categoriesQuery";
import { TheButton } from "@/Shared/TheButton";
import { CategoryResponse } from "@/types";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Outlet, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const CreatorHomePage = () => {
	const [firstCategory, setFirstCategory] = useState<CategoryResponse>();
	const [started, setStarted] = useState<boolean>(false);

	const { data: categories } = useSuspenseQuery(categoriesQueryOptions);

	useEffect(() => {
		const category = categories.find((category) => category.position === 1);
		if (!category) return;
		setFirstCategory(category);
	}, [categories]);

	const navigate = useNavigate();
	if (!firstCategory) return <p> No form ... </p>;

	const GO_TO_FORM = () => {
		if (started) {
			navigate({ to: `/` });
			setStarted(false);
			return;
		}
		navigate({ to: `/creator/${firstCategory.id}` });
		setStarted(true);
	};

	const btnLabel = started ? "STOP" : "START";
	return (
		<>
			{!started && (
				<div>
					<h1>Kreator auta</h1>
					<p>Przejdź do formularza klikając na start</p>
				</div>
			)}
			<TheButton btnLabel={btnLabel} onClick={GO_TO_FORM} />
			<Outlet />
		</>
	);
};
