import { PartsResponse } from "@/types";
import { useDeletePartMutation } from "@/mutations/useDeletePartMutation";
import { TheButton } from "@/Shared/TheButton";

type DeletePartConfirmationProps = {
	onCancel: () => void;
	deletedPart: PartsResponse;
};

export const DeletePart = ({
	onCancel,
	deletedPart,
}: DeletePartConfirmationProps) => {
	const { mutate: DELETE_PART, error, isPending } = useDeletePartMutation();

	const HANDLE_DELETE = () => DELETE_PART(deletedPart.id);

	if (isPending) return <p>Loading...</p>;
	return (
		<div>
			<p>
				Do you really want to delete option <strong>{deletedPart.name}</strong>?
			</p>
			<TheButton btnLabel="DELETE" onClick={HANDLE_DELETE} />
			<TheButton btnLabel="CANCEL" onClick={onCancel} />
			{error && <p>{error.message}</p>}
		</div>
	);
};
