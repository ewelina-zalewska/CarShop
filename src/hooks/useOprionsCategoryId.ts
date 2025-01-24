import { getRouteApi } from "@tanstack/react-router";

const categoryRoute = getRouteApi("/options/category/$categoryId");

export const useOptionsCategoryId = () => {
	const { categoryId } = categoryRoute.useParams();
	return categoryId;
};
