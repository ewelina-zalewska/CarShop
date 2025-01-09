export type CategoryForm = {
	name: string;
	identifier: string;
};

export type CategoryResponse = {
	id: string;
	name: string;
	identifier: string;
	position: number;
};

export type CategoryDto = Omit<CategoryResponse, "id">;

export type PartsResponse = {
	id: string;
	name: string;
	price: number;
	partId: string;
	categoryId: string;
};

export type CategoryOptions = CategoryResponse & {
	parts: PartsResponse[];
};

export type CategorySearch = {
	page: number;
	pageSize: number;
};
