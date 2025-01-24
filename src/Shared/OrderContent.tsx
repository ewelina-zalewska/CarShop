import { useSuspenseQuery } from "@tanstack/react-query";
import { orderQueryOptions } from "@/queries/orderQuery";

type OrderContent = {
	orderId: string;
};

export const OrderContent = ({ orderId }: OrderContent) => {
	const { data: order } = useSuspenseQuery(orderQueryOptions(orderId));

	return (
		<>
			<h2 className="text-center">Treść zamówienia:</h2>
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
		</>
	);
};
