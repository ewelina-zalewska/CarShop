﻿import { NewOrderDataFormFieldsetProps } from "@/types";
import { TheInput } from "@/Shared/TheInput";
import { FieldErrors } from "@/Shared/FieldErrors";

export const OrderDataFormFieldset = ({
	onChange,
	formState,
	errors,
}: NewOrderDataFormFieldsetProps) => {
	const { firstName, lastName, email } = formState;
	return (
		<fieldset>
			<div>
				<TheInput
					legend="Imię:"
					type="text"
					name="firstName"
					placeholder="imię"
					value={firstName}
					onChange={onChange}
				/>
				<FieldErrors errors={errors.firstName} />
			</div>
			<div>
				<TheInput
					legend="Nazwisko:"
					type="text"
					name="lastName"
					placeholder="nazwisko"
					value={lastName}
					onChange={onChange}
				/>
				<FieldErrors errors={errors.lastName} />
			</div>
			<div>
				<TheInput
					legend="Email"
					type="email"
					name="email"
					placeholder="email"
					value={email}
					onChange={onChange}
				/>
			</div>
			<FieldErrors errors={errors.email} />
		</fieldset>
	);
};
