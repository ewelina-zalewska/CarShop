import { useEffect, useState } from "react";

export const useGetStarted = () => {
	const [form, setForm] = useState<"started" | "closed">("closed");

	useEffect(() => {
		const isStarted = localStorage.getItem("form");
		if (isStarted === "started" || isStarted === "closed") {
			setForm(isStarted);
		}
	}, []);

	return {
		isStarted: form === "started",
		isClosed: form === "closed",
		setForm,
	};
};
