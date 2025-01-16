import { createLazyFileRoute } from "@tanstack/react-router";
import { TheSuccess } from "@/components/form/OrderData/TheSuccess/TheSuccess";

export const Route = createLazyFileRoute(
	"/_formWrapper/creator/success/$orderId",
)({
	component: TheSuccess,
});
