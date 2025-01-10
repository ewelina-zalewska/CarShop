import { Outlet } from "@tanstack/react-router";

export const WrongOptionsPlace = () => {
	return (
		<div>
			<h1>Such category does not exist.</h1>
			<p> Did you want to go to "/options/category/body"?</p>
			<Outlet />
		</div>
	);
};
