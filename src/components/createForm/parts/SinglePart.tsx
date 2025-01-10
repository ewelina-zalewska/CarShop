import { useState } from "react";
import { PartsResponse } from "@/types";
import { useDeletePartMutation } from "@/mutations/useDeletePartMutation";
import { DeletePartConfirmation } from "@/components/createForm/parts/DeletePartConfirmation";
import { TheButton } from "@/Shared/TheButton";

type optionProps = {
	option: PartsResponse;
};

export const SinglePart = ({ option }: optionProps) => {
	const { error, isPending } = useDeletePartMutation();

	const [deleted, setDeleted] = useState<"delete" | "none">("none");

	const TOGGLE_DELETE_MODE = () =>
		setDeleted((prevDeleted) => (prevDeleted === "delete" ? "none" : "delete"));

	if (isPending) return <p>Loading...</p>;
	return (
		<>
			<li>
				{option.name}
				<TheButton
					btnLabel={deleted === "delete" ? "CANCEL" : "DELETE"}
					disabled={isPending}
					onClick={TOGGLE_DELETE_MODE}
				/>
			</li>
			{deleted === "delete" && (
				<DeletePartConfirmation
					onCancel={TOGGLE_DELETE_MODE}
					deletedPart={option}
				/>
			)}
			{error && <p>{error.message}</p>}
		</>
	);
};
