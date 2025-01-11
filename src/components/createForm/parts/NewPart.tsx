import { FormEvent } from "react";
import { getRouteApi, useNavigate } from "@tanstack/react-router";
import { PartForm } from "@/types";
import { useForm } from "@/hooks/useForm";
import { useCreatePartMutation } from "@/mutations/useCreatePartMutation";
import { NewPartFormFieldset } from "@/components/createForm/parts/NewPartFormFieldset";
import { TheButton } from "@/Shared/TheButton";

const categoryRoute = getRouteApi(
	"/_optionWrapper/options/category/$categoryId",
);

export const NewPart = () => {
	const { categoryId } = categoryRoute.useParams();
	const { mutate: CREATE_PART, isSuccess } = useCreatePartMutation();
	const [formState, setFormState, HANDLE_CHANGE] = useForm<PartForm>({
		name: "",
		price: 0,
		partId: "string",
	});
	const { name, price, partId } = formState;

	const HANDLE_SUBMIT = (e: FormEvent) => {
		e.preventDefault();
		console.log("hand");
		CREATE_PART({
			name,
			price,
			partId,
			categoryId,
		});

		setFormState({
			name,
			price,
			partId,
		});
	};

	const navigate = useNavigate();

	const GO_TO_CATEGORY = () =>
		navigate({ to: `/options/category/${categoryId}` });

	return (
		<>
			<div>
				<h2>Nowa opcja</h2>
				<form onSubmit={HANDLE_SUBMIT}>
					<NewPartFormFieldset onChange={HANDLE_CHANGE} formState={formState} />
					<TheButton btnLabel="DODAJ OPCJE" type="submit"></TheButton>
				</form>
				{isSuccess && (
					<div>
						<p>Opcja {name} została dodana. Dodaj kolejną opcję.</p>
						<TheButton onClick={GO_TO_CATEGORY} btnLabel="COFNIJ"></TheButton>
					</div>
				)}
			</div>
		</>
	);
};
