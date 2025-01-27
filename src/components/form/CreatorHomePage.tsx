import { useEffect, useState } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Outlet } from "@tanstack/react-router";
import { categoriesQueryOptions } from "@/queries/categoriesQuery";
import { CategoryResponse } from "@/types";
import { useGetStarted } from "@/hooks/useGetStarted";
import { TheButton } from "@/Shared/TheButton";
import { MainCollapsibleAccordion } from "@/Shared/MainCollapsibleAccordion";
import { MenuCollapsibleAccordion } from "@/Shared/MenuCollapsibleAccordion";
import { LinkToPage } from "@/Shared/LinkToPage";

export const CreatorHomePage = () => {
	const { data: categories } = useSuspenseQuery(categoriesQueryOptions);
	const [firstCategory, setFirstCategory] = useState<CategoryResponse>();
	const form = useGetStarted();

	useEffect(() => {
		const category = categories.find((category) => category.position === 1);
		if (!category) return;
		setFirstCategory(category);
	}, [categories]);

	if (!firstCategory) return <p> No form ... </p>;
	return (
		<>
			<MenuCollapsibleAccordion title="Car Shop">
				{form.isClosed && <LinkToPage title="Do strony głównej" link="/" />}
				{form.isStarted && (
					<>
						<h3 className="mb-3 text-[22px]">Kreator auta</h3>
						<div className="lg:hidden ">
							<TheButton btnLabel={"Stop"} onClick={form.HANDLE_STOP} />
						</div>
					</>
				)}
			</MenuCollapsibleAccordion>
			<MainCollapsibleAccordion>
				{form.isClosed && (
					<div className="formStyled h-[150px]">
						<h1 className="text-[30px] ">Kreator auta</h1>
						<p className="text-[20px]">
							Przejdź do formularza klikając na start
						</p>
						<TheButton
							btnLabel={"Start"}
							onClick={() => form.HANDLE_START(firstCategory.id)}
						/>
					</div>
				)}
				<Outlet />
			</MainCollapsibleAccordion>
		</>
	);
};
