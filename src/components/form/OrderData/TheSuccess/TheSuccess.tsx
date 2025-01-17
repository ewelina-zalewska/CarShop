import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "@tanstack/react-router";
import { useOrderId } from "@/hooks/useOrderId";
import { TheButton } from "@/Shared/TheButton";
import { OrderContent } from "@/Shared/OrderContent";

export const TheSuccess = () => {
	const orderId = useOrderId();

	const [clickedDeleteBtn, setClickedDeleteBtn] = useState<boolean>(false);

	const navigate = useNavigate();
	const accessCondition = localStorage.getItem("form");

	const GO_TO_DELETE_ORDER = () => {
		setClickedDeleteBtn(!clickedDeleteBtn);
		if (!clickedDeleteBtn) {
			navigate({ to: `/creator/success/${orderId}/delete` });
		} else navigate({ to: `/creator/success/${orderId}` });
	};

	useEffect(() => {
		if (accessCondition !== "send") navigate({ to: "/creator/wrongplace" });
		return () => localStorage.setItem("form", "closed");
	}, []);

	return (
		<div>
			<h2>Zamówienie zostało wysłane.</h2>
			<OrderContent orderId={orderId} />
			<div>
				<p>Jeżeli się rozmyśliłeś/aś, kliknij: </p>
				<TheButton
					type="button"
					btnLabel={clickedDeleteBtn ? "COFNIJ" : "USUŃ"}
					onClick={GO_TO_DELETE_ORDER}
				/>
				<Outlet />
			</div>
		</div>
	);
};
