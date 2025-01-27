import { useEffect } from "react";
import { Outlet, useNavigate } from "@tanstack/react-router";
import { useOrderId } from "@/hooks/useOrderId";
import { TheButton } from "@/Shared/TheButton";
import { OrderContent } from "@/Shared/OrderContent";
import { FormLink } from "@/Shared/FormLink";

export const TheSuccess = () => {
	const orderId = useOrderId();

	const navigate = useNavigate();
	const accessCondition = localStorage.getItem("form");

	const GO_TO_DELETE_ORDER = () =>
		navigate({ to: `/creator/success/${orderId}/delete` });

	useEffect(() => {
		if (accessCondition !== "send") navigate({ to: "/creator/wrongplace" });
		return () => localStorage.setItem("form", "closed");
	}, []);

	return (
		<div className="lg:h-[600px] lg:ml-[200px] w-full text-theme-lightblue-color flex flex-col justify-center items-center gap-10 h-[800px] my-auto">
			<div className="p-3 text-center text-[20px]">
				<p>Zamówienie zostało wysłane.</p>
				<p className="p-3">Jeżeli się rozmyśliłeś/aś, kliknij: </p>
				<TheButton type="button" btnLabel="Usuń" onClick={GO_TO_DELETE_ORDER} />
				<Outlet />
			</div>
			<div className="shadow-additionalColorkBorder bg-theme-lightblue-color min-w-[400px] w-[35%] text-theme-dark-color text-[20px] flex flex-col items-center rounded-md h-[500px] overflow-y-auto py-4 justify-evenly">
				<OrderContent orderId={orderId} />
			</div>
			<FormLink link="/" title="Powrót" />
		</div>
	);
};
