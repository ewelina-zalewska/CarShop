import { useDeleteOrderMutation } from "@/mutations/useDeleteOrderMutation";
import { orderQueryOptions } from "@/queries/orderQuery";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { useOrderId } from "@/hooks/useOrderId";
import { DeleteConfirmation } from "@/Shared/DeleteConfirmation";

export const TheSuccessDeleteOrder = () => {
	const orderId = useOrderId();
	const { data: order } = useSuspenseQuery(orderQueryOptions(orderId));

	const { mutate: DELETE_ORDER } = useDeleteOrderMutation();
	const navigate = useNavigate();

	const HANDLE_DELETE = () => {
		DELETE_ORDER(orderId);
		localStorage.clear();
		navigate({ to: `/creator/deletedorder` });
	};

	return (
		<DeleteConfirmation
			width={500}
			height={300}
			item="zamówienie"
			name={order.id}
			link={`/creator/success/${order.id}`}
			onClick={HANDLE_DELETE}
		/>
	);
};
