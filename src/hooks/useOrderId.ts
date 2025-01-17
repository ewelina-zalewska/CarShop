import { getRouteApi } from "@tanstack/react-router";

const categoryRoute = getRouteApi("/_formWrapper/creator/success/$orderId");

export const useOrderId = () => {
	const { orderId } = categoryRoute.useParams();
	return orderId;
};
