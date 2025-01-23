import { useSuspenseQuery } from "@tanstack/react-query";
import { Outlet, useNavigate } from "@tanstack/react-router";
import { categoryQueryOptions } from "@/queries/categoryQuery";
import { useOptionsCategoryId } from "@/hooks/useOprionsCategoryId";
import { useDeleteCategoryMutation } from "@/mutations/useDeleteCategoryMutation";
import { SinglePart } from "@/components/createForm/parts/SinglePart";
import { ModalBox } from "@/Shared/ModalBox";
import { LinkToPage } from "@/Shared/LinkToPage";
import { TheButton } from "@/Shared/TheButton";

export const SingleCategory = () => {
	const categoryId = useOptionsCategoryId();
	const { data } = useSuspenseQuery(categoryQueryOptions(categoryId));
	const { error, isPending } = useDeleteCategoryMutation();

	const navigate = useNavigate();
	const DELETE_CATEGORY = () =>
		navigate({ to: `/options/category/${data.id}/delete` });
	const ADD_PART = () =>
		navigate({ to: `/options/category/${data.id}/newPart` });

	if (isPending)
		return <p>Loading...Loading...Loading...Loading...Loading...Loading...</p>;
	if (error) return <p>{error.message} </p>;
	return (
		<>
			<ModalBox width={500} height={600}>
				<h2 className="text-[24px] font-bold">{data.name}</h2>
				<div className="w-[70%] overflow-y-auto max-h-[55%]">
					{data.parts.map((part) => (
						<SinglePart key={part.id} option={part} />
					))}
				</div>
				<TheButton onClick={ADD_PART} btnLabel="Dodaj opcję" />
				<TheButton onClick={DELETE_CATEGORY} btnLabel="Usuń kategorię" />
				<LinkToPage link="/options/category" title="Powrót"></LinkToPage>
			</ModalBox>
			<Outlet />
		</>
	);
};
