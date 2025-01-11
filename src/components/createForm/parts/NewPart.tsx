import { FormEvent, useEffect, useRef, useState } from "react";
import { getRouteApi, useNavigate } from "@tanstack/react-router";
import { PartForm, PartFormErrors } from "@/types";
import { useSuccess } from "@/hooks/useSuccess";
import { useForm } from "@/hooks/useForm";
import { useCreatePartMutation } from "@/mutations/useCreatePartMutation";
import { NewPartFormFieldset } from "@/components/createForm/parts/NewPartFormFieldset";
import { TheButton } from "@/Shared/TheButton";
import { validatePart as VALIDATE_PART } from "@/utils/validatePart";

const categoryRoute = getRouteApi(
	"/_optionWrapper/options/category/$categoryId",
);

export const NewPart = () => {
	const { categoryId } = categoryRoute.useParams();

	const formRef = useRef<HTMLFormElement>(null);
	const { success, setSuccess } = useSuccess();
	const [submitClicked, setSubmitClicked] = useState<boolean>(false);

	const { mutate: CREATE_PART } = useCreatePartMutation();
	const [formState, setFormState, HANDLE_CHANGE] = useForm<PartForm>({
		name: "",
		price: 0,
		partId: "",
	});
	const { name, price, partId } = formState;

	const [errors, setErrors] = useState<PartFormErrors>({
		name: [],
		price: [],
		partId: [],
	});

	useEffect(() => {
		if (submitClicked) {
			const { newErrors } = VALIDATE_PART(formState);
			setErrors(newErrors);
		}
	}, [formState, submitClicked]);

	const HANDLE_SUBMIT = (e: FormEvent) => {
		e.preventDefault();
		const { newErrors, isSuccess } = VALIDATE_PART(formState);
		setErrors(newErrors);
		setSuccess(isSuccess);

		if (!success) {
			setSubmitClicked(true);
		} else {
			CREATE_PART({
				name,
				price,
				partId,
				categoryId,
			});

			setFormState({
				name: "",
				price: 0,
				partId: "",
			});
			setSubmitClicked(false);
			console.log("Form is being sent!");
		}
	};

	const navigate = useNavigate();

	const SEND_FORM = () => formRef.current?.requestSubmit();

	const GO_TO_CATEGORY = () =>
		navigate({ to: `/options/category/${categoryId}` });

	return (
		<>
			<div>
				<h2>Nowa opcja</h2>
				<form ref={formRef} onSubmit={HANDLE_SUBMIT}>
					<NewPartFormFieldset
						onChange={HANDLE_CHANGE}
						formState={formState}
						errors={errors}
					/>
					<TheButton
						onClick={SEND_FORM}
						btnLabel="DODAJ OPCJE"
						type="submit"
					></TheButton>
				</form>
				{success && (
					<div>
						<p>Opcja {name} została dodana. Dodaj kolejną opcję.</p>
					</div>
				)}
				<TheButton onClick={GO_TO_CATEGORY} btnLabel="COFNIJ"></TheButton>
			</div>
		</>
	);
};
