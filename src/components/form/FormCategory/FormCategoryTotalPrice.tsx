import { useTotalPrice } from "@/hooks/useTotalPrice";
import { useSelectedParts } from "@/hooks/useSelectedParts";

export const FormCategoryTotalPrice = () => {
	const selectedParts = useSelectedParts();
	const totalPrice = useTotalPrice(selectedParts);

	return (
		<h3>
			Wartość zamówienia:
			{totalPrice}
		</h3>
	);
};
