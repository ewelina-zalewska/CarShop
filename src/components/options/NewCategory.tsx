import { useCreateCategoryMutation } from "@/mutations/useCreateCategoryMutation";
import { categoriesQueryOptions } from "@/queries/categoriesQuery";
import { CategoryForm } from "@/types";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
// import { useNavigate } from "@tanstack/react-router";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

export const NewCategory = () => {
	const { data } = useSuspenseQuery(categoriesQueryOptions);
	const [formState, setFormState] = useState<CategoryForm>({
		name: "",
		identifier: "",
	});

	const getValue = (target: ChangeEvent<HTMLInputElement>["target"]) => {
		if (target.type === "number") return Number(target.value);
		return target.value;
	};

	const HANDLE_CHANGE = (e: ChangeEvent<HTMLInputElement>) => {
		setFormState((prevFormState) => ({
			...prevFormState,
			[e.target.name]: getValue(e.target),
		}));
	};

	const navigate = useNavigate();
	const { mutate, isSuccess } = useCreateCategoryMutation();
	const HANDLE_SUBMIT = (e: FormEvent) => {
		e.preventDefault();

		mutate({
			name: formState.name,
			identifier: formState.identifier,
			position: data.length + 1,
		});
	};

	useEffect(() => {
		if (!isSuccess) return;
		navigate({ to: "/options/category" });
	}, [isSuccess]);

	return (
		<>
			<h1>STWÓRZ NOWĄ KATEGORIĘ</h1>
			<div>
				<h2>New category</h2>
				<form onSubmit={HANDLE_SUBMIT}>
					<input
						type="text"
						name="name"
						placeholder="nazwa kategorii"
						value={formState.name}
						onChange={HANDLE_CHANGE}
					/>
					<input
						type="text"
						name="identifier"
						placeholder="identyfikator kategorii"
						value={formState.identifier}
						onChange={HANDLE_CHANGE}
					/>
					<button type="submit">DODAJ</button>
				</form>
			</div>
		</>
	);
};
