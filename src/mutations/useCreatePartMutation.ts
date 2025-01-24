import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PartDto, PartsResponse } from "@/types";
import { apiCall } from "@/utils/apiCall";

export const useCreatePartMutation = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationKey: ["new-part"],
		mutationFn: async (body: PartDto) =>
			apiCall<PartsResponse, PartDto>("parts", {
				method: "POST",
				body,
			}),
		onSuccess: () => {
			queryClient.refetchQueries({
				queryKey: ["categories"],
			});
		},
	});
};
