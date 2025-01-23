import { FormEvent, useEffect, useRef, useState } from "react";
import { Outlet, useNavigate } from "@tanstack/react-router";
import { useShallow } from "zustand/shallow";
import { useSuspenseQuery } from "@tanstack/react-query";
import { ordersQueryOptions } from "@/queries/ordersQuery";
import { useOrderStore } from "@/store/useOrderStore";
import { useInput } from "@/hooks/useInput";
import { validateOrder as VALIDATE_ORDER } from "@/utils/validateOrder";
import { MenuCollapsibleAccordion } from "@/Shared/MenuCollapsibleAccordion";
import { MainCollapsibleAccordion } from "@/Shared/MainCollapsibleAccordion";
import { FormCollapsibleAccordion } from "@/Shared/FormCollapsibleAccordion";
import { TheInput } from "@/Shared/TheInput";
import { TheButton } from "@/Shared/TheButton";
import { LinkToPage } from "@/Shared/LinkToPage";

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
		else {
			navigate({ to: `/order/${orderId.value}` });
			setSubmitClicked(false);
			orderId.setValue("");
		}
	};

	const SEND_FORM = () => formRef.current?.requestSubmit();
	const showedOrder = order.orderMode === "show";
	return (
		<>
			<MenuCollapsibleAccordion title="Car Shop">
				<LinkToPage title="Do strony głównej" link="/" />
			</MenuCollapsibleAccordion>
			<MainCollapsibleAccordion>
				<FormCollapsibleAccordion formRef={formRef} onSubmit={HANDLE_SUBMIT}>
					<TheInput
						legend="Twój numer zamówienia:"
						type="text"
						name="orderNo"
						placeholder="Numer zamówienia"
						value={orderId.value}
						onChange={orderId.onChange}
					/>
					{submitClicked && !showedOrder && (
						<p className="text-theme-error-color p-2">{error}</p>
					)}

					<TheButton
						onClick={SEND_FORM}
						btnLabel="Sprawdź"
						disabled={showedOrder}
						type="submit"
					></TheButton>
				</FormCollapsibleAccordion>
				<Outlet />
			</MainCollapsibleAccordion>
		</>
	);
};
