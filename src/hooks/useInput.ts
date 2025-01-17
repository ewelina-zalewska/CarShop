import { FormChangeEvent } from "@/types";
import { useState } from "react";

export const useInput = (defaultValue: string) => {
	const [value, setValue] = useState<string>(defaultValue);

	const onChange = (e: FormChangeEvent) => {
		setValue(e.target.value);
	};

	return { value, onChange, setValue };
};
