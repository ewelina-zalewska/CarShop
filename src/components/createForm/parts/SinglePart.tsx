import { PartsResponse } from "@/types";
import { useOptionsCategoryId } from "@/hooks/useOprionsCategoryId";
import { useDeletePartMutation } from "@/mutations/useDeletePartMutation";
import { TheButton } from "@/Shared/TheButton";
import { useNavigate } from "@tanstack/react-router";

type optionProps = {
	option: PartsResponse;
};

export const SinglePart = ({ option }: optionProps) => {
	const categoryId = useOptionsCategoryId();
	const { error, isPending } = useDeletePartMutation();

	const navigate = useNavigate();
	const DELETE_PART = () =>
		navigate({ to: `/options/category/${categoryId}/${option.id}` });

	if (isPending) return <p>Loading...</p>;
	if (error) return <p>{error.message} </p>;
	return (
		<>
			<div className="flex justify-between pb-2 pr-1 mt-1">
				<p>{option.name}</p>
				<TheButton btnLabel="Usuń" disabled={isPending} onClick={DELETE_PART} />
			</div>
		</>
	);
};
