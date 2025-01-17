import { OrderDataResponse } from "@/types";

type validateOrderErrorProps = {
	orderId: {
		value: string;
	};
	orders: OrderDataResponse[];
};

export const validateOrder = ({ orderId, orders }: validateOrderErrorProps) => {
	const newError: string[] = [];

	const noFullfilled: boolean =
		!orderId.value.trim() || orderId.value.length < 7;
	if (noFullfilled) {
		newError.push("Pole jest wymagane (min 7 znaków)");
	}

	const isOrder = orders.some((order) => order.id === orderId.value);
	if (!isOrder && !noFullfilled) {
		newError.push("Nie ma takiego zamówienia");
	}

	return { newError, noFullfilled, isOrder };
};
