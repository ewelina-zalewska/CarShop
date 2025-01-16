import { useEffect } from "react";
import { getRouteApi, Outlet, useNavigate } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { orderQueryOptions } from "@/queries/orderQuery";
import { TheButton } from "@/Shared/TheButton";

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

	const GO_TO_DELETE_ORDER = () =>
		navigate({ to: `/creator/success/${orderId}/delete` });

	useEffect(() => {
		if (accessCondition !== "send") navigate({ to: "/creator/wrongplace" });
		return () => localStorage.setItem("form", "closed");
	}, []);

	if (isLoading) return <p>Loading...</p>;
	return (
		<div>
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
							<p key={index}>
								{index === order.details.length - 1 ? item + "." : item + ","}
							</p>
						))}
					</li>
				</ul>
			</div>
			<div>
				<p>Jeżeli się rozmyśliłeś/aś, kliknij: </p>
				<TheButton type="button" btnLabel="USUŃ" onClick={GO_TO_DELETE_ORDER} />
				<Outlet />
			</div>
			{error && <p>{error?.message}</p>}
		</div>
	);
};
