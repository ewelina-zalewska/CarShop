import { useState } from "react";
import { PartsResponse } from "@/types";
import { useDeletePartMutation } from "@/mutations/useDeletePartMutation";
import { DeletePart } from "@/components/createForm/parts/DeletePart";
import { TheButton } from "@/Shared/TheButton";

type optionProps = {
	option: PartsResponse;
};

export const SinglePart = ({ option }: optionProps) => {
	const { error, isPending } = useDeletePartMutation();

	const [deleted, setDeleted] = useState<"delete" | "none">("none");

	const TOGGLE_DELETE_MODE = () =>
		setDeleted((prevDeleted) => (prevDeleted === "delete" ? "none" : "delete"));

	if (isPending)
		return <p>Loading...Loading...Loading...Loading...Loading...Loading...</p>;
	if (error) return <p>{error.message} </p>;
	return (
		<>
			<div className="flex justify-between pb-2 pr-1 mt-1">
				<p>{option.name}</p>
				<TheButton
					btnLabel="Usuń"
					disabled={isPending}
					onClick={TOGGLE_DELETE_MODE}
				/>
			</div>
			{deleted === "delete" && (
				<DeletePart onCancel={TOGGLE_DELETE_MODE} deletedPart={option} />
			)}
		</>
	);
};
