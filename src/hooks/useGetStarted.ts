import { useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const useGetStarted = () => {
	const [form, setForm] = useState<"started" | "closed">("closed");

	useEffect(() => {
		const isStarted = localStorage.getItem("form");
		if (isStarted === "started" || isStarted === "closed") {
			setForm(isStarted);
		}
	}, []);
	const navigate = useNavigate();

	const HANDLE_START = (firstCategoryId: string) => {
		navigate({ to: `/creator/${firstCategoryId}` });
		localStorage.setItem("form", "started");
		setForm("started");
	};

	const HANDLE_STOP = () => {
		localStorage.setItem("form", "closed");
		setForm("closed");
		navigate({ to: `/` });
	};

	return {
		isStarted: form === "started",
		isClosed: form === "closed",
		HANDLE_START,
		HANDLE_STOP,

		setForm,
	};
};
