import { Link, Outlet } from "@tanstack/react-router";

export const CreatorHomePage = () => {
	return (
		<>
			<h1>Kreator auta</h1>
			<p>Przejdź do formularza klikając na start</p>
			<Link to="/creator/form">START</Link>
			<Link to="/">COFNIJ</Link>
			<Outlet />
		</>
	);
};
