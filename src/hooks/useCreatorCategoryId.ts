import { getRouteApi } from "@tanstack/react-router";

const categoryRoute = getRouteApi("/_formWrapper/creator/$categoryId");

export const useCreatorCategoryId = () => {
	const { categoryId } = categoryRoute.useParams();
	return categoryId;
};
