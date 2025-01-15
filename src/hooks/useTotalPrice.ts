import { useEffect, useState } from "react";
import { selectedPart } from "@/types";

export const useTotalprice = (selectedParts: selectedPart[]) => {
	const [totalPrice, setTotalPrice] = useState<number>(0);

	useEffect(() => {
		const prices: number[] = [];
		let sum = 0;
		selectedParts.map((part) => prices.push(part.price));
		for (let i = 0; i < prices.length; i++) {
			sum += prices[i];
		}
		setTotalPrice(sum);
	}, [selectedParts]);

	return totalPrice;
};
