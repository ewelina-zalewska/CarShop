import { PartsResponse } from "@/types";
import { useDeletePartMutation } from "@/mutations/useDeletePartMutation";
import { TheButton } from "@/Shared/TheButton";
import { ModalBox } from "@/Shared/ModalBox";

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

	if (isPending)
		return <p>Loading...Loading...Loading...Loading...Loading...Loading...</p>;
	if (error) return <p>{error.message} </p>;
	return (
		<>
			<ModalBox width={500} height={200}>
				<p>
					Czy na pewno chcesz usunąć opcję <strong>{deletedPart.name}</strong>?
				</p>
				<TheButton btnLabel="Usuń" onClick={HANDLE_DELETE} />
				<TheButton btnLabel="Zostaw" onClick={onCancel} />
			</ModalBox>
		</>
	);
};
