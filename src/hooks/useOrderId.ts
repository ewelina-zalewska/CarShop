import { getRouteApi } from "@tanstack/react-router";

const categoryRoute = getRouteApi("/creator/success/$orderId");

export const useOrderId = () => {
	const { orderId } = categoryRoute.useParams();
	return orderId;
};
