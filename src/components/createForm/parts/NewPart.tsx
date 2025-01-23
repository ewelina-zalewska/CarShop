import { FormEvent, useEffect, useRef, useState } from "react";
import { PartForm, PartFormErrors } from "@/types";
import { useSuccess } from "@/hooks/useSuccess";
import { useOptionsCategoryId } from "@/hooks/useOprionsCategoryId";
import { useForm } from "@/hooks/useForm";
import { useCreatePartMutation } from "@/mutations/useCreatePartMutation";
import { NewPartFormFieldset } from "@/components/createForm/parts/NewPartFormFieldset";
import { TheButton } from "@/Shared/TheButton";
import { validatePart as VALIDATE_PART } from "@/utils/validatePart";
import { ModalBox } from "@/Shared/ModalBox";
import { LinkToPage } from "@/Shared/LinkToPage";

export const NewPart = () => {
	const categoryId = useOptionsCategoryId();

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

	const SEND_FORM = () => formRef.current?.requestSubmit();
	return (
		<>
			<ModalBox width={500} height={600}>
				<h2 className="text-[30px]">Nowa opcja</h2>
				<form
					ref={formRef}
					onSubmit={HANDLE_SUBMIT}
					className="flex flex-col basis-[60%] w-[70%] justify-evenly"
				>
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
						<p className="font-bold">
							Opcja {name} została dodana. Dodaj kolejną opcję.
						</p>
					</div>
				)}
				<LinkToPage link={`/options/category/${categoryId}`} title="Powrót" />
			</ModalBox>
		</>
	);
};
