import { useSuspenseQuery } from "@tanstack/react-query";
import { orderQueryOptions } from "@/queries/orderQuery";

type OrderContent = {
	orderId: string;
};

export const OrderContent = ({ orderId }: OrderContent) => {
	const { data: order } = useSuspenseQuery(orderQueryOptions(orderId));

	return (
		<ul>
			<li>
				Zamówienie Nr: <strong>{order.id}</strong>
			</li>
			<li>
				Dla:{" "}
				<strong>
					{order.firstName} {order.lastName} , {order.email}
				</strong>
			</li>
			<li>
				Wartość:<strong> {order.value}</strong>
			</li>
			<li>
				Szczegóły:
				{order.details.map((item, index) => (
					<p key={index}>
						{index === order.details.length - 1 ? item + "." : item + ","}
					</p>
				))}
			</li>
		</ul>
	);
};
