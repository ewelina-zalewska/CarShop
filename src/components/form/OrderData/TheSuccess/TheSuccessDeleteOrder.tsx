import { useDeleteOrderMutation } from "@/mutations/useDeleteOrderMutation";
import { orderQueryOptions } from "@/queries/orderQuery";
import { TheButton } from "@/Shared/TheButton";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getRouteApi, useNavigate } from "@tanstack/react-router";

const categoryRoute = getRouteApi("/_formWrapper/creator/success/$orderId");

export const TheSuccessDeleteOrder = () => {
	const { orderId } = categoryRoute.useParams();
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
	const GO_TO_ORDER = () => navigate({ to: `/creator/success/${orderId}` });

	if (isLoading) return <p>Loading...</p>;
	return (
		<div>
			<p>
				Czy na pewno chcesz usunąć zamównienie nr <strong>{order.id}</strong>?
			</p>
			<TheButton btnLabel="USUŃ" onClick={HANDLE_DELETE} />
			<TheButton type="button" btnLabel="COFNIJ" onClick={GO_TO_ORDER} />
			{error && <p>{error.message}</p>}
		</div>
	);
};
