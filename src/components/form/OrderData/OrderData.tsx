import { FormEvent, useEffect, useRef, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { OrderDataForm, OrderDataFormErrors } from "@/types";
import { useForm } from "@/hooks/useForm";
import { useSuccess } from "@/hooks/useSuccess";
import { useSelectedParts } from "@/hooks/useSelectedParts";
import { useTotalPrice } from "@/hooks/useTotalPrice";
import { useCreateOrderMutation } from "@/mutations/useCreateOrderMutation";
import { validateOrderData as VALIDATE_ORDER_DATA } from "@/utils/validateOrderData";
import { OrderDataFormFieldset } from "@/components/form/OrderData/OrderDataFormFieldset";
import { OrderDataSummary } from "@/components/form/OrderData/OrderDataSummary";
import { TheButton } from "@/Shared/TheButton";

export const OrderData = () => {
	const selectedParts = useSelectedParts();
	const totalPrice = useTotalPrice(selectedParts);
	const formRef = useRef<HTMLFormElement>(null);

	const { success, setSuccess } = useSuccess();
	const [submitClicked, setSubmitClicked] = useState<boolean>(false);

	const { mutate: CREATE_ORDER, isPending } = useCreateOrderMutation();

	const [formState, setFormState, HANDLE_CHANGE] = useForm<OrderDataForm>({
		firstName: "",
		lastName: "",
		email: "",
	});
	const { firstName, lastName, email } = formState;

	const [errors, setErrors] = useState<OrderDataFormErrors>({
		firstName: [],
		lastName: [],
		email: [],
	});

	useEffect(() => {
		if (submitClicked) {
			const { newErrors } = VALIDATE_ORDER_DATA(formState);
			setErrors(newErrors);
		}
	}, [formState, submitClicked]);

	const HANDLE_SUBMIT = (e: FormEvent) => {
		e.preventDefault();
		const { newErrors, isSuccess } = VALIDATE_ORDER_DATA(formState);
		setErrors(newErrors);
		setSuccess(isSuccess);

		if (!success) {
			setSubmitClicked(true);
		} else {
			const randomId = Math.round(Math.random() * 10000).toString();
			CREATE_ORDER({
				id: randomId,
				firstName,
				lastName,
				email,
				value: totalPrice,
				details: selectedParts.map((part) => `${part.category} ${part.name}`),
			});

			setFormState({
				firstName: "",
				lastName: "",
				email: "",
			});
			localStorage.clear();
			setSubmitClicked(false);
			navigate({ to: `/creator/success/${randomId}` });
			localStorage.setItem("form", "send");
		}
	};
	const navigate = useNavigate();
	const SEND_FORM = () => formRef.current?.requestSubmit();

	if (localStorage.getItem("form") !== "started")
		return <p>Go back and click the button START.</p>;
	return (
		<div>
			<OrderDataSummary />
			<form ref={formRef} onSubmit={HANDLE_SUBMIT}>
				<OrderDataFormFieldset
					onChange={HANDLE_CHANGE}
					formState={formState}
					errors={errors}
				/>
				<TheButton
					onClick={SEND_FORM}
					disabled={isPending}
					btnLabel="WYŚLIJ"
					type="submit"
				></TheButton>
			</form>
		</div>
	);
};
