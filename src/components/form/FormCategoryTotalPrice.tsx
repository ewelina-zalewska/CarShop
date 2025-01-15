import { useTotalprice } from "@/hooks/useTotalPrice";
import { useSelectedParts } from "@/hooks/useSelectedParts";

export const FormCategoryTotalPrice = () => {
	const selectedParts = useSelectedParts();
	const totalPrice = useTotalprice(selectedParts);

	return (
		<h3>
			Wartość zamówienia:
			{totalPrice}
		</h3>
	);
};
