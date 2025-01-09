import { PartsResponse } from "@/types";
import { useDeletePartMutation } from "@/mutations/useDeletePartMutation";
import { useEffect, useState } from "react";

type optionProps = {
	option: PartsResponse;
};

export const TheParts = ({ option }: optionProps) => {
	const { mutate: DELETE_PART, isPending, isSuccess } = useDeletePartMutation();
	const [deleted, setDeleted] = useState<boolean>(false);

	const HANDLE_DELETE = (deletedCategoryId: string) => {
		DELETE_PART(deletedCategoryId);
		if (!isSuccess) return;
		setDeleted(true);
	};

	useEffect(() => {
		if (!deleted) return;
		const interval = setTimeout(() => {
			setDeleted(false);
			clearTimeout(interval);
		}, 3000);

		return () => {
			clearTimeout(interval);
		};
	}, [deleted]);

	if (isPending) return <p>Loading...</p>;
	return (
		<>
			<li>
				{option.name}
				<button onClick={() => HANDLE_DELETE(option.id)}>DELETE</button>
			</li>
			{deleted && <p>{option.name} has been deleted.</p>}
		</>
	);
};
