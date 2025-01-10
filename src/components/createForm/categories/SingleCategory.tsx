import { useState } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getRouteApi, Link } from "@tanstack/react-router";
import { categoryQueryOptions } from "@/queries/categoryQuery";
import { useDeleteCategoryMutation } from "@/mutations/useDeleteCategoryMutation";
import { SinglePart } from "@/components/createForm/parts/SinglePart";
import { DeleteCategoryConfirmation } from "@/components/createForm/categories/DeleteCategoryConfirmation";
import { TheButton } from "@/Shared/TheButton";

const categoryRoute = getRouteApi(
	"/_optionWrapper/options/category/$categoryId",
);

export const SingleCategory = () => {
	const { categoryId } = categoryRoute.useParams();
	const { data } = useSuspenseQuery(categoryQueryOptions(categoryId));
	const { error, isPending } = useDeleteCategoryMutation();

	const [deleted, setDeleted] = useState<"delete" | "none">("none");

	const TOGGLE_DELETE_MODE = () =>
		setDeleted((prevDeleted) => (prevDeleted === "delete" ? "none" : "delete"));

	if (isPending) return <p>Loading...</p>;
	return (
		<>
			<div>
				<h2>{data.name}</h2>

				<ul>
					{data.parts.map((part) => (
						<SinglePart key={part.id} option={part} />
					))}
				</ul>
				<TheButton
					btnLabel={deleted === "delete" ? "CANCEL" : "DELETE CATEGORY"}
					disabled={isPending}
					onClick={TOGGLE_DELETE_MODE}
				/>
				{deleted === "delete" && (
					<DeleteCategoryConfirmation
						onCancel={TOGGLE_DELETE_MODE}
						deletedCategory={data}
					/>
				)}
				{error && <p>{error.message}</p>}
			</div>
			<Link to="/options/category">POWRÓT</Link>
		</>
	);
};
