import React, { Suspense } from "react";
import {
	createRootRouteWithContext,
	Link,
	Outlet,
} from "@tanstack/react-router";
import { Route as CreateImport } from "@/routes/_formWrapper/create";
import { Route as OptionsImport } from "@/routes/_optionWrapper/options";
import { QueryClient } from "@tanstack/react-query";

const TanStackRouterDevtools = import.meta.env.DEV
	? React.lazy(() =>
			import("@tanstack/router-devtools").then((res) => ({
				default: res.TanStackRouterDevtools,
				defaultStaleTime: 5000,
			})),
		)
	: () => null;

const RootComponent = () => {
	return (
		<div>
			<header>
				<nav>
					<h1>Projekt Car Shop – stwórz swoje wymarzone auto.</h1>
					<ul>
						<li>
							<Link to={OptionsImport.fullPath}>ZARZĄDZAJ KREATOREM</Link>
						</li>
						<li>
							<Link to={CreateImport.fullPath}>KREUJ AUTO</Link>
						</li>
					</ul>
				</nav>
				<Outlet />
				<Suspense>
					<TanStackRouterDevtools />
				</Suspense>
			</header>
		</div>
	);
};

type RootContext = {
	queryClient: QueryClient;
};

export const Route = createRootRouteWithContext<RootContext>()({
	component: RootComponent,
});
