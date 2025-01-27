import { useSelectedParts } from "@/hooks/useSelectedParts";
import { useTotalPrice } from "@/hooks/useTotalPrice";

export const OrderDataSummary = () => {
	const selectedParts = useSelectedParts();
	const totalPrice = useTotalPrice(selectedParts);

	return (
		<div className="shadow-additionalColorkBorder bg-theme-lightblue-color min-w-[400px] w-[35%] text-theme-dark-color text-[20px] flex flex-col justify-evenly items-center rounded-md h-[600px] overflow-y-auto mt-[20px] lg:mt-[50px]">
			<h2 className="text-[22px] p-3">Podsumowanie zamówienia:</h2>
			<ul className="w-[90%] p-5">
				{selectedParts.map((part) => (
					<li
						key={part.category}
						className="flex shadow-darkBorder rounded-sm px-3"
					>
						<p className="flex-grow ">{part.category}</p>
						<p className="self-end ">
							<strong>{part.name}</strong>
						</p>
					</li>
				))}
			</ul>
			<p className=" p-5">
				Łączna wartość zamówienia: <strong>{totalPrice}</strong>
			</p>
		</div>
	);
};
