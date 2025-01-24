import { getRouteApi } from "@tanstack/react-router";

const categoryRoute = getRouteApi("/creator/$categoryId");

export const useCreatorCategoryId = () => {
	const { categoryId } = categoryRoute.useParams();
	return categoryId;
};
