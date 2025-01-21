import { getRouteApi, useNavigate } from "@tanstack/react-router";
import { useShallow } from "zustand/shallow";
import { useOrderStore } from "@/store/useOrderStore";
import { OrderContent } from "@/Shared/OrderContent";
import { useEffect } from "react";
import { TheButton } from "@/Shared/TheButton";
import { OrderContainer } from "@/Shared/OrderContainer";

const categoryRoute = getRouteApi("/order/$orderId");

export const TheOrder = () => {
	const { orderId } = categoryRoute.useParams();
	const { setOrderData } = useOrderStore(
		useShallow((state) => ({
			setOrderData: state.setOrderData,
			order: state.order,
		})),
	);

	useEffect(() => {
		setOrderData({
			orderMode: "show",
		});
		return () => {
			setOrderData({
				orderMode: "hide",
			});
		};
	}, []);

	const navigate = useNavigate();
	const GO_TO_FORM = () => navigate({ to: "/order" });

	return (
		<div className="h-screen w-full flex justify-center items-center">
			<OrderContainer>
				<OrderContent orderId={orderId} />
				<TheButton btnLabel="Cofnij" onClick={GO_TO_FORM} />
			</OrderContainer>
		</div>
	);
};
