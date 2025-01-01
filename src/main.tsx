import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CarShop } from "@/components/CarShop";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<CarShop />
	</StrictMode>,
);
