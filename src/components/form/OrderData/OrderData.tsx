import { FormEvent, useEffect, useRef, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { OrderDataForm, OrderDataFormErrors } from "@/types";
import { useForm } from "@/hooks/useForm";
import { useSuccess } from "@/hooks/useSuccess";
import { useSelectedParts } from "@/hooks/useSelectedParts";
import { useTotalPrice } from "@/hooks/useTotalPrice";
import { useCreateOrderNumber } from "@/hooks/useCreateOrderNumber";
import { useCreateOrderMutation } from "@/mutations/useCreateOrderMutation";
import { validateOrderData as VALIDATE_ORDER_DATA } from "@/utils/validateOrderData";
import { OrderDataFormFieldset } from "@/components/form/OrderData/OrderDataFormFieldset";
import { OrderDataSummary } from "@/components/form/OrderData/OrderDataSummary";
import { TheButton } from "@/Shared/TheButton";
import { WrongPlace } from "@/Shared/WrongPlace";

export const OrderData = () => {
	const selectedParts = useSelectedParts();
	const totalPrice = useTotalPrice(selectedParts);
	const formRef = useRef<HTMLFormElement>(null);
	const orderNo = useCreateOrderNumber();

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
			CREATE_ORDER({
				id: orderNo,
				firstName,
				lastName,
				email,
				value: totalPrice,
				details: selectedParts.map(
					(part) => `${part.category} :  ${part.name}`,
				),
			});

			setFormState({
				firstName: "",
				lastName: "",
				email: "",
			});
			localStorage.clear();
			setSubmitClicked(false);
			localStorage.setItem("form", "send");
			navigate({ to: `/creator/success/${orderNo}` });
		}
	};
	const navigate = useNavigate();
	const SEND_FORM = () => formRef.current?.requestSubmit();

	const wrongPlace = localStorage.getItem("form") !== "started";

	return (
		<>
			{wrongPlace ? (
				<WrongPlace />
			) : (
				<div className="lg:h-[600px] lg:ml-[200px] w-full text-theme-lightblue-color flex lg:flex-row flex-col justify-center items-center gap-10 h-[800px] pb-[100px] mt-[50px]">
					<OrderDataSummary />
					<form
						ref={formRef}
						onSubmit={HANDLE_SUBMIT}
						className="min-w-[250px] w-[25%] flex flex-col justify-evenly items-center"
					>
						<OrderDataFormFieldset
							onChange={HANDLE_CHANGE}
							formState={formState}
							errors={errors}
						/>
						<TheButton
							onClick={SEND_FORM}
							disabled={isPending}
							btnLabel="Wyślij"
							type="submit"
						></TheButton>
					</form>
				</div>
			)}
		</>
	);
};
