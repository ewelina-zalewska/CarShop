﻿type ApiConfig<P = void> = {
	id?: string;
	method?: "GET" | "POST" | "DELETE" | "PATCH" | "PUT";
	body?: P;
};

export const apiCall = async <R, P = void>(
	url: string,
	config?: ApiConfig<P>,
) => {
	const API_BASE = import.meta.env.VITE_API_URL;

	const response = await fetch(`${API_BASE}${url}`, {
		method: config?.method || "GET",
		body: config?.body ? JSON.stringify(config.body) : undefined,
	});
	return response.json() as Promise<R>;
};
