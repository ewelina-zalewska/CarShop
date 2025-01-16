import { useEffect } from "react";
import { getRouteApi, useNavigate } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { orderQueryOptions } from "@/queries/orderQuery";

const categoryRoute = getRouteApi("/_formWrapper/creator/success/$orderId");

export const TheSuccess = () => {
	const { orderId } = categoryRoute.useParams();
	const {
		data: order,
		isLoading,
		error,
	} = useSuspenseQuery(orderQueryOptions(orderId));

	const navigate = useNavigate();
	const accessCondition = localStorage.getItem("form");

	useEffect(() => {
		if (accessCondition !== "send") navigate({ to: "/creator/wrongplace" });
		return () => localStorage.setItem("form", "closed");
	}, []);

	if (isLoading) return <p>Loading...</p>;
	return (
		<>
			<h2>Zamówienie zostało wysłane.</h2>

			<div>
				<h2>Treść zamówienia:</h2>
				<ul>
					<li>
						Zamówienie Nr: <strong>{order.id}</strong>
					</li>
					<li>
						{order.firstName} {order.lastName}
					</li>
					<li>{order.email}</li>
					<li>Wartość: {order.value}</li>
					<li>
						Szczegóły:
						{order.details.map((item, index) => (
							<p>
								{index === order.details.length - 1 ? item + "." : item + ","}
							</p>
						))}
					</li>
				</ul>
			</div>
			{error && <p>{error?.message}</p>}
		</>
	);
};
