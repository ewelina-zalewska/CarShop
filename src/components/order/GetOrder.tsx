import { FormEvent, useEffect, useRef, useState } from "react";
import { Link, Outlet, useNavigate } from "@tanstack/react-router";
import { useShallow } from "zustand/shallow";
import { useSuspenseQuery } from "@tanstack/react-query";
import { ordersQueryOptions } from "@/queries/ordersQuery";
import { useOrderStore } from "@/store/useOrderStore";
import { useInput } from "@/hooks/useInput";
import { validateOrder as VALIDATE_ORDER } from "@/utils/validateOrder";
import { TheInput } from "@/Shared/TheInput";
import { TheButton } from "@/Shared/TheButton";

export const GetOrder = () => {
	const formRef = useRef<HTMLFormElement>(null);
	const { order } = useOrderStore(
		useShallow((state) => ({
			order: state.order,
		})),
	);

	const { data: orders } = useSuspenseQuery(ordersQueryOptions);
	const orderId = useInput("");

	const [error, setError] = useState<string[]>();
	const [submitClicked, setSubmitClicked] = useState<boolean>(false);

	useEffect(() => {
		if (!submitClicked) return;
		const timer = setTimeout(() => {
			setSubmitClicked(false);
		}, 2000);
		return () => {
			clearTimeout(timer);
		};
	}, [submitClicked]);

	const navigate = useNavigate();

	const HANDLE_SUBMIT = (e: FormEvent) => {
		e.preventDefault();

		setSubmitClicked(true);
		const checkOrder = VALIDATE_ORDER({
			orderId,
			orders,
		});
		setError(checkOrder.newError);
		if (checkOrder.noFullfilled || !checkOrder.isOrder) return;
		else navigate({ to: `/order/${orderId.value}` });
		orderId.setValue("");
	};

	const SEND_FORM = () => formRef.current?.requestSubmit();
	const showedOrder = order.orderMode === "show";
	return (
		<>
			<h2>Tu możesz sprawdzić swoje zamówienie:</h2>
			<form ref={formRef} onSubmit={HANDLE_SUBMIT}>
				<div>
					<TheInput
						legend="Twój numer zamówienia:"
						type="text"
						name="orderNo"
						placeholder="Numer zamówienia"
						value={orderId.value}
						onChange={orderId.onChange}
					/>
					{submitClicked && !showedOrder && <p>{error}</p>}
				</div>

				<TheButton
					onClick={SEND_FORM}
					btnLabel="SPRAWDŻ"
					disabled={showedOrder}
					type="submit"
				></TheButton>
			</form>
			<Outlet />
			<Link to="/">DO STRONY GŁÓWNEJ</Link>
		</>
	);
};
