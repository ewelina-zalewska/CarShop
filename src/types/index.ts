import { ChangeEvent } from "react";

export type CategoryForm = {
	name: string;
	identifier: string;
};
export type PartForm = {
	name: string;
	price: number;
	partId: string;
};

export type CategoryResponse = {
	id: string;
	name: string;
	identifier: string;
	position: number;
};

export type PartsResponse = {
	id: string;
	name: string;
	price: number;
	partId: string;
	categoryId: string;
};
export type CategoryDto = Omit<CategoryResponse, "id">;

export type PartDto = Omit<PartsResponse, "id">;

export type CategoryFormErrors = {
	name: string[];
	identifier: string[];
};

export type PartFormErrors = {
	name: string[];
	price: string[];
	partId: string[];
};

export type NewCategoryFormFieldsetProps = {
	onChange: (e: FormChangeEvent) => void;
	formState: CategoryForm;
	errors: CategoryFormErrors;
};

export type NewPartFormFieldsetProps = {
	onChange: (e: FormChangeEvent) => void;
	formState: PartForm;
	errors: PartFormErrors;
};

export type CategoryOptions = CategoryResponse & {
	parts: PartsResponse[];
};

export type CategorySearch = {
	page: number;
	pageSize: number;
};

export type FormChangeEvent = ChangeEvent<HTMLInputElement | HTMLSelectElement>;

export type FieldErrorsProps = {
	errors: string[];
};
