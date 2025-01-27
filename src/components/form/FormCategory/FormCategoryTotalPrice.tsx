import { useTotalPrice } from "@/hooks/useTotalPrice";
import { useSelectedParts } from "@/hooks/useSelectedParts";

export const FormCategoryTotalPrice = () => {
	const selectedParts = useSelectedParts();
	const totalPrice = useTotalPrice(selectedParts);

	return (
		<h3 className="pt-5 text-[19px]">
			Wartość zamówienia:
			<strong> {totalPrice}</strong>
		</h3>
	);
};
