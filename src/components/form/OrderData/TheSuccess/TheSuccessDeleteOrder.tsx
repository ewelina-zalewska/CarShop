import { useDeleteOrderMutation } from "@/mutations/useDeleteOrderMutation";
import { orderQueryOptions } from "@/queries/orderQuery";
import { TheButton } from "@/Shared/TheButton";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { useOrderId } from "@/hooks/useOrderId";

export const TheSuccessDeleteOrder = () => {
	const orderId = useOrderId();
	const {
		data: order,
		isLoading,
		error,
	} = useSuspenseQuery(orderQueryOptions(orderId));

	const { mutate: DELETE_ORDER } = useDeleteOrderMutation();
	const navigate = useNavigate();

	const HANDLE_DELETE = () => {
		DELETE_ORDER(orderId);
		localStorage.clear();
		navigate({ to: `/creator/success` });
	};

	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>{error.message} </p>;
	return (
		<div>
			<p>
				Czy na pewno chcesz usunąć zamównienie nr <strong>{order.id}</strong>?
			</p>
			<TheButton btnLabel="USUŃ" onClick={HANDLE_DELETE} />
		</div>
	);
};
