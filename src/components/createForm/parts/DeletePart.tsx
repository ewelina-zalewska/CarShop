import { FormEvent, useEffect } from "react";
import { partsQueryOptions } from "@/queries/partsQuery";
import { getRouteApi, useNavigate } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useDeletePartMutation } from "@/mutations/useDeletePartMutation";
import { TheButton } from "@/Shared/TheButton";
import { ModalBox } from "@/Shared/ModalBox";
import { LinkToPage } from "@/Shared/LinkToPage";

const categoryRoute = getRouteApi("/options/category/$categoryId/$partId");

export const DeletePart = () => {
	const { categoryId, partId } = categoryRoute.useParams();
	const {
		mutate: DELETE_PART,
		error,
		isSuccess,
		isPending,
	} = useDeletePartMutation();
	const { data: parts } = useSuspenseQuery(partsQueryOptions);

	const HANDLE_DELETE = (e: FormEvent) => {
		e.preventDefault();
		DELETE_PART(partId);
	};

	const partName = parts
		?.filter((part) => part.id === partId)
		.map((part) => part.name);

	const navigate = useNavigate();
	useEffect(() => {
		if (!isSuccess) return;
		navigate({ to: `/options/category` });
	}, [isSuccess]);

	if (isPending) return <p>Loading...</p>;
	if (error) return <p>{error.message} </p>;
	return (
		<>
			<ModalBox width={500} height={200}>
				<p>
					Czy na pewno chcesz usunąć opcję <strong>{partName}</strong>?
				</p>
				<TheButton btnLabel="Usuń" onClick={HANDLE_DELETE} />
				<LinkToPage link={`/options/category/${categoryId}`} title="Powrót" />
			</ModalBox>
		</>
	);
};
