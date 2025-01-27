import { getRouteApi } from "@tanstack/react-router";
import { useShallow } from "zustand/shallow";
import { useOrderStore } from "@/store/useOrderStore";
import { OrderContent } from "@/Shared/OrderContent";
import { useEffect } from "react";
import { ModalBox } from "@/Shared/ModalBox";
import { LinkToPage } from "@/Shared/LinkToPage";

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

	return (
		<>
			<ModalBox width={400} height={550}>
				<OrderContent orderId={orderId} />
				<LinkToPage title="Powrót" link="/order" />
			</ModalBox>
		</>
	);
};
