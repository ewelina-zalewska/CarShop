import { useSelectedParts } from "@/hooks/useSelectedParts";
import { useTotalPrice } from "@/hooks/useTotalPrice";

export const OrderDataSummary = () => {
	const selectedParts = useSelectedParts();
	const totalPrice = useTotalPrice(selectedParts);

	return (
		<div>
			<h2>Podsumowanie zamówienia:</h2>
			<ul>
				{selectedParts.map((part) => (
					<li key={part.category}>
						<p>
							{part.category} <strong>{part.name}</strong>
						</p>
					</li>
				))}
			</ul>
			<p>
				Łączna wartość zamówienia: <strong>{totalPrice}</strong>
			</p>
		</div>
	);
};
