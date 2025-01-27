import { FormEvent, useEffect } from "react";
import { partsQueryOptions } from "@/queries/partsQuery";
import { getRouteApi, useNavigate } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useDeletePartMutation } from "@/mutations/useDeletePartMutation";
import { DeleteConfirmation } from "@/Shared/DeleteConfirmation";

const categoryRoute = getRouteApi("/options/category/$categoryId/$partId");

export const DeletePart = () => {
	const { categoryId, partId } = categoryRoute.useParams();
	const { mutate: DELETE_PART, isSuccess } = useDeletePartMutation();
	const { data: parts } = useSuspenseQuery(partsQueryOptions);

	const HANDLE_DELETE = (e: FormEvent) => {
		e.preventDefault();
		DELETE_PART(partId);
	};

	const partName = parts?.find((part) => part.id === partId);

	const navigate = useNavigate();
	useEffect(() => {
		if (!isSuccess) return;
		navigate({ to: `/options/category` });
	}, [isSuccess]);

	if (!partName) return;
	return (
		<DeleteConfirmation
			width={500}
			height={200}
			item="opcję "
			name={partName.name}
			link={`/options/category/${categoryId}`}
			onClick={HANDLE_DELETE}
		/>
	);
};
