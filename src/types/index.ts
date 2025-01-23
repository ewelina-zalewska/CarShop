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

export type OrderDataForm = {
	firstName: string;
	lastName: string;
	email: string;
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

export type OrderDataResponse = {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	value: number;
	details: string[];
};

export type CategoryDto = Omit<CategoryResponse, "id">;

export type PartDto = Omit<PartsResponse, "id">;

export type OrderDataDto = OrderDataResponse;

export type CategoryFormErrors = {
	name: string[];
	identifier: string[];
};

export type PartFormErrors = {
	name: string[];
	price: string[];
	partId: string[];
};

export type OrderDataFormErrors = {
	firstName: string[];
	lastName: string[];
	email: string[];
};

export type NewCategoryFormFieldsetProps = {
	onChange: (e: FormChangeEvent) => void;
	formState: CategoryForm;
	errors: CategoryFormErrors;
	disabled: boolean;
};

export type NewPartFormFieldsetProps = {
	onChange: (e: FormChangeEvent) => void;
	formState: PartForm;
	errors: PartFormErrors;
};

export type NewOrderDataFormFieldsetProps = {
	onChange: (e: FormChangeEvent) => void;
	formState: OrderDataForm;
	errors: OrderDataFormErrors;
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

export type useChangeCategoryProps = {
	category: CategoryResponse;
	categories: CategoryResponse[];
	categoryId: string;
};

export type selectedPart = {
	name: string;
	price: number;
	category: string;
};
