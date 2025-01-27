/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from "./routes/__root";
import { Route as OrderImport } from "./routes/order";
import { Route as OptionsImport } from "./routes/options";
import { Route as CreatorImport } from "./routes/creator";
import { Route as SplatImport } from "./routes/$";
import { Route as IndexImport } from "./routes/index";
import { Route as OptionsIndexImport } from "./routes/options/index";
import { Route as CreatorIndexImport } from "./routes/creator/index";
import { Route as OrderOrderIdImport } from "./routes/order/$orderId";
import { Route as OptionsNewImport } from "./routes/options/new";
import { Route as OptionsCategoryImport } from "./routes/options/category";
import { Route as OptionsSplatImport } from "./routes/options/$";
import { Route as CreatorWrongplaceImport } from "./routes/creator/wrongplace";
import { Route as CreatorSuccessImport } from "./routes/creator/success";
import { Route as CreatorOrderdataImport } from "./routes/creator/orderdata";
import { Route as CreatorDeletedorderImport } from "./routes/creator/deletedorder";
import { Route as CreatorCategoryIdImport } from "./routes/creator/$categoryId";
import { Route as CreatorSplatImport } from "./routes/creator/$";
import { Route as OptionsCategoryCategoryIdImport } from "./routes/options/category/$categoryId";
import { Route as CreatorSuccessOrderIdImport } from "./routes/creator/success/$orderId";
import { Route as OptionsCategoryCategoryIdNewPartImport } from "./routes/options/category/$categoryId.newPart";
import { Route as OptionsCategoryCategoryIdDeleteImport } from "./routes/options/category/$categoryId.delete";
import { Route as OptionsCategoryCategoryIdPartIdImport } from "./routes/options/category/$categoryId.$partId";
import { Route as CreatorSuccessOrderIdDeleteImport } from "./routes/creator/success/$orderId.delete";

// Create/Update Routes

const OrderRoute = OrderImport.update({
	id: "/order",
	path: "/order",
	getParentRoute: () => rootRoute,
} as any);

const OptionsRoute = OptionsImport.update({
	id: "/options",
	path: "/options",
	getParentRoute: () => rootRoute,
} as any);

const CreatorRoute = CreatorImport.update({
	id: "/creator",
	path: "/creator",
	getParentRoute: () => rootRoute,
} as any).lazy(() => import("./routes/creator.lazy").then((d) => d.Route));

const SplatRoute = SplatImport.update({
	id: "/$",
	path: "/$",
	getParentRoute: () => rootRoute,
} as any);

const IndexRoute = IndexImport.update({
	id: "/",
	path: "/",
	getParentRoute: () => rootRoute,
} as any);

const OptionsIndexRoute = OptionsIndexImport.update({
	id: "/",
	path: "/",
	getParentRoute: () => OptionsRoute,
} as any);

const CreatorIndexRoute = CreatorIndexImport.update({
	id: "/",
	path: "/",
	getParentRoute: () => CreatorRoute,
} as any);

const OrderOrderIdRoute = OrderOrderIdImport.update({
	id: "/$orderId",
	path: "/$orderId",
	getParentRoute: () => OrderRoute,
} as any).lazy(() =>
	import("./routes/order/$orderId.lazy").then((d) => d.Route),
);

const OptionsNewRoute = OptionsNewImport.update({
	id: "/new",
	path: "/new",
	getParentRoute: () => OptionsRoute,
} as any);

const OptionsCategoryRoute = OptionsCategoryImport.update({
	id: "/category",
	path: "/category",
	getParentRoute: () => OptionsRoute,
} as any).lazy(() =>
	import("./routes/options/category.lazy").then((d) => d.Route),
);

const OptionsSplatRoute = OptionsSplatImport.update({
	id: "/$",
	path: "/$",
	getParentRoute: () => OptionsRoute,
} as any);

const CreatorWrongplaceRoute = CreatorWrongplaceImport.update({
	id: "/wrongplace",
	path: "/wrongplace",
	getParentRoute: () => CreatorRoute,
} as any);

const CreatorSuccessRoute = CreatorSuccessImport.update({
	id: "/success",
	path: "/success",
	getParentRoute: () => CreatorRoute,
} as any);

const CreatorOrderdataRoute = CreatorOrderdataImport.update({
	id: "/orderdata",
	path: "/orderdata",
	getParentRoute: () => CreatorRoute,
} as any);

const CreatorDeletedorderRoute = CreatorDeletedorderImport.update({
	id: "/deletedorder",
	path: "/deletedorder",
	getParentRoute: () => CreatorRoute,
} as any);

const CreatorCategoryIdRoute = CreatorCategoryIdImport.update({
	id: "/$categoryId",
	path: "/$categoryId",
	getParentRoute: () => CreatorRoute,
} as any).lazy(() =>
	import("./routes/creator/$categoryId.lazy").then((d) => d.Route),
);

const CreatorSplatRoute = CreatorSplatImport.update({
	id: "/$",
	path: "/$",
	getParentRoute: () => CreatorRoute,
} as any);

const OptionsCategoryCategoryIdRoute = OptionsCategoryCategoryIdImport.update({
	id: "/$categoryId",
	path: "/$categoryId",
	getParentRoute: () => OptionsCategoryRoute,
} as any).lazy(() =>
	import("./routes/options/category/$categoryId.lazy").then((d) => d.Route),
);

const CreatorSuccessOrderIdRoute = CreatorSuccessOrderIdImport.update({
	id: "/$orderId",
	path: "/$orderId",
	getParentRoute: () => CreatorSuccessRoute,
} as any).lazy(() =>
	import("./routes/creator/success/$orderId.lazy").then((d) => d.Route),
);

const OptionsCategoryCategoryIdNewPartRoute =
	OptionsCategoryCategoryIdNewPartImport.update({
		id: "/newPart",
		path: "/newPart",
		getParentRoute: () => OptionsCategoryCategoryIdRoute,
	} as any);

const OptionsCategoryCategoryIdDeleteRoute =
	OptionsCategoryCategoryIdDeleteImport.update({
		id: "/delete",
		path: "/delete",
		getParentRoute: () => OptionsCategoryCategoryIdRoute,
	} as any).lazy(() =>
		import("./routes/options/category/$categoryId.delete.lazy").then(
			(d) => d.Route,
		),
	);

const OptionsCategoryCategoryIdPartIdRoute =
	OptionsCategoryCategoryIdPartIdImport.update({
		id: "/$partId",
		path: "/$partId",
		getParentRoute: () => OptionsCategoryCategoryIdRoute,
	} as any).lazy(() =>
		import("./routes/options/category/$categoryId.$partId.lazy").then(
			(d) => d.Route,
		),
	);

const CreatorSuccessOrderIdDeleteRoute =
	CreatorSuccessOrderIdDeleteImport.update({
		id: "/delete",
		path: "/delete",
		getParentRoute: () => CreatorSuccessOrderIdRoute,
	} as any).lazy(() =>
		import("./routes/creator/success/$orderId.delete.lazy").then(
			(d) => d.Route,
		),
	);

// Populate the FileRoutesByPath interface

declare module "@tanstack/react-router" {
	interface FileRoutesByPath {
		"/": {
			id: "/";
			path: "/";
			fullPath: "/";
			preLoaderRoute: typeof IndexImport;
			parentRoute: typeof rootRoute;
		};
		"/$": {
			id: "/$";
			path: "/$";
			fullPath: "/$";
			preLoaderRoute: typeof SplatImport;
			parentRoute: typeof rootRoute;
		};
		"/creator": {
			id: "/creator";
			path: "/creator";
			fullPath: "/creator";
			preLoaderRoute: typeof CreatorImport;
			parentRoute: typeof rootRoute;
		};
		"/options": {
			id: "/options";
			path: "/options";
			fullPath: "/options";
			preLoaderRoute: typeof OptionsImport;
			parentRoute: typeof rootRoute;
		};
		"/order": {
			id: "/order";
			path: "/order";
			fullPath: "/order";
			preLoaderRoute: typeof OrderImport;
			parentRoute: typeof rootRoute;
		};
		"/creator/$": {
			id: "/creator/$";
			path: "/$";
			fullPath: "/creator/$";
			preLoaderRoute: typeof CreatorSplatImport;
			parentRoute: typeof CreatorImport;
		};
		"/creator/$categoryId": {
			id: "/creator/$categoryId";
			path: "/$categoryId";
			fullPath: "/creator/$categoryId";
			preLoaderRoute: typeof CreatorCategoryIdImport;
			parentRoute: typeof CreatorImport;
		};
		"/creator/deletedorder": {
			id: "/creator/deletedorder";
			path: "/deletedorder";
			fullPath: "/creator/deletedorder";
			preLoaderRoute: typeof CreatorDeletedorderImport;
			parentRoute: typeof CreatorImport;
		};
		"/creator/orderdata": {
			id: "/creator/orderdata";
			path: "/orderdata";
			fullPath: "/creator/orderdata";
			preLoaderRoute: typeof CreatorOrderdataImport;
			parentRoute: typeof CreatorImport;
		};
		"/creator/success": {
			id: "/creator/success";
			path: "/success";
			fullPath: "/creator/success";
			preLoaderRoute: typeof CreatorSuccessImport;
			parentRoute: typeof CreatorImport;
		};
		"/creator/wrongplace": {
			id: "/creator/wrongplace";
			path: "/wrongplace";
			fullPath: "/creator/wrongplace";
			preLoaderRoute: typeof CreatorWrongplaceImport;
			parentRoute: typeof CreatorImport;
		};
		"/options/$": {
			id: "/options/$";
			path: "/$";
			fullPath: "/options/$";
			preLoaderRoute: typeof OptionsSplatImport;
			parentRoute: typeof OptionsImport;
		};
		"/options/category": {
			id: "/options/category";
			path: "/category";
			fullPath: "/options/category";
			preLoaderRoute: typeof OptionsCategoryImport;
			parentRoute: typeof OptionsImport;
		};
		"/options/new": {
			id: "/options/new";
			path: "/new";
			fullPath: "/options/new";
			preLoaderRoute: typeof OptionsNewImport;
			parentRoute: typeof OptionsImport;
		};
		"/order/$orderId": {
			id: "/order/$orderId";
			path: "/$orderId";
			fullPath: "/order/$orderId";
			preLoaderRoute: typeof OrderOrderIdImport;
			parentRoute: typeof OrderImport;
		};
		"/creator/": {
			id: "/creator/";
			path: "/";
			fullPath: "/creator/";
			preLoaderRoute: typeof CreatorIndexImport;
			parentRoute: typeof CreatorImport;
		};
		"/options/": {
			id: "/options/";
			path: "/";
			fullPath: "/options/";
			preLoaderRoute: typeof OptionsIndexImport;
			parentRoute: typeof OptionsImport;
		};
		"/creator/success/$orderId": {
			id: "/creator/success/$orderId";
			path: "/$orderId";
			fullPath: "/creator/success/$orderId";
			preLoaderRoute: typeof CreatorSuccessOrderIdImport;
			parentRoute: typeof CreatorSuccessImport;
		};
		"/options/category/$categoryId": {
			id: "/options/category/$categoryId";
			path: "/$categoryId";
			fullPath: "/options/category/$categoryId";
			preLoaderRoute: typeof OptionsCategoryCategoryIdImport;
			parentRoute: typeof OptionsCategoryImport;
		};
		"/creator/success/$orderId/delete": {
			id: "/creator/success/$orderId/delete";
			path: "/delete";
			fullPath: "/creator/success/$orderId/delete";
			preLoaderRoute: typeof CreatorSuccessOrderIdDeleteImport;
			parentRoute: typeof CreatorSuccessOrderIdImport;
		};
		"/options/category/$categoryId/$partId": {
			id: "/options/category/$categoryId/$partId";
			path: "/$partId";
			fullPath: "/options/category/$categoryId/$partId";
			preLoaderRoute: typeof OptionsCategoryCategoryIdPartIdImport;
			parentRoute: typeof OptionsCategoryCategoryIdImport;
		};
		"/options/category/$categoryId/delete": {
			id: "/options/category/$categoryId/delete";
			path: "/delete";
			fullPath: "/options/category/$categoryId/delete";
			preLoaderRoute: typeof OptionsCategoryCategoryIdDeleteImport;
			parentRoute: typeof OptionsCategoryCategoryIdImport;
		};
		"/options/category/$categoryId/newPart": {
			id: "/options/category/$categoryId/newPart";
			path: "/newPart";
			fullPath: "/options/category/$categoryId/newPart";
			preLoaderRoute: typeof OptionsCategoryCategoryIdNewPartImport;
			parentRoute: typeof OptionsCategoryCategoryIdImport;
		};
	}
}

// Create and export the route tree

interface CreatorSuccessOrderIdRouteChildren {
	CreatorSuccessOrderIdDeleteRoute: typeof CreatorSuccessOrderIdDeleteRoute;
}

const CreatorSuccessOrderIdRouteChildren: CreatorSuccessOrderIdRouteChildren = {
	CreatorSuccessOrderIdDeleteRoute: CreatorSuccessOrderIdDeleteRoute,
};

const CreatorSuccessOrderIdRouteWithChildren =
	CreatorSuccessOrderIdRoute._addFileChildren(
		CreatorSuccessOrderIdRouteChildren,
	);

interface CreatorSuccessRouteChildren {
	CreatorSuccessOrderIdRoute: typeof CreatorSuccessOrderIdRouteWithChildren;
}

const CreatorSuccessRouteChildren: CreatorSuccessRouteChildren = {
	CreatorSuccessOrderIdRoute: CreatorSuccessOrderIdRouteWithChildren,
};

const CreatorSuccessRouteWithChildren = CreatorSuccessRoute._addFileChildren(
	CreatorSuccessRouteChildren,
);

interface CreatorRouteChildren {
	CreatorSplatRoute: typeof CreatorSplatRoute;
	CreatorCategoryIdRoute: typeof CreatorCategoryIdRoute;
	CreatorDeletedorderRoute: typeof CreatorDeletedorderRoute;
	CreatorOrderdataRoute: typeof CreatorOrderdataRoute;
	CreatorSuccessRoute: typeof CreatorSuccessRouteWithChildren;
	CreatorWrongplaceRoute: typeof CreatorWrongplaceRoute;
	CreatorIndexRoute: typeof CreatorIndexRoute;
}

const CreatorRouteChildren: CreatorRouteChildren = {
	CreatorSplatRoute: CreatorSplatRoute,
	CreatorCategoryIdRoute: CreatorCategoryIdRoute,
	CreatorDeletedorderRoute: CreatorDeletedorderRoute,
	CreatorOrderdataRoute: CreatorOrderdataRoute,
	CreatorSuccessRoute: CreatorSuccessRouteWithChildren,
	CreatorWrongplaceRoute: CreatorWrongplaceRoute,
	CreatorIndexRoute: CreatorIndexRoute,
};

const CreatorRouteWithChildren =
	CreatorRoute._addFileChildren(CreatorRouteChildren);

interface OptionsCategoryCategoryIdRouteChildren {
	OptionsCategoryCategoryIdPartIdRoute: typeof OptionsCategoryCategoryIdPartIdRoute;
	OptionsCategoryCategoryIdDeleteRoute: typeof OptionsCategoryCategoryIdDeleteRoute;
	OptionsCategoryCategoryIdNewPartRoute: typeof OptionsCategoryCategoryIdNewPartRoute;
}

const OptionsCategoryCategoryIdRouteChildren: OptionsCategoryCategoryIdRouteChildren =
	{
		OptionsCategoryCategoryIdPartIdRoute: OptionsCategoryCategoryIdPartIdRoute,
		OptionsCategoryCategoryIdDeleteRoute: OptionsCategoryCategoryIdDeleteRoute,
		OptionsCategoryCategoryIdNewPartRoute:
			OptionsCategoryCategoryIdNewPartRoute,
	};

const OptionsCategoryCategoryIdRouteWithChildren =
	OptionsCategoryCategoryIdRoute._addFileChildren(
		OptionsCategoryCategoryIdRouteChildren,
	);

interface OptionsCategoryRouteChildren {
	OptionsCategoryCategoryIdRoute: typeof OptionsCategoryCategoryIdRouteWithChildren;
}

const OptionsCategoryRouteChildren: OptionsCategoryRouteChildren = {
	OptionsCategoryCategoryIdRoute: OptionsCategoryCategoryIdRouteWithChildren,
};

const OptionsCategoryRouteWithChildren = OptionsCategoryRoute._addFileChildren(
	OptionsCategoryRouteChildren,
);

interface OptionsRouteChildren {
	OptionsSplatRoute: typeof OptionsSplatRoute;
	OptionsCategoryRoute: typeof OptionsCategoryRouteWithChildren;
	OptionsNewRoute: typeof OptionsNewRoute;
	OptionsIndexRoute: typeof OptionsIndexRoute;
}

const OptionsRouteChildren: OptionsRouteChildren = {
	OptionsSplatRoute: OptionsSplatRoute,
	OptionsCategoryRoute: OptionsCategoryRouteWithChildren,
	OptionsNewRoute: OptionsNewRoute,
	OptionsIndexRoute: OptionsIndexRoute,
};

const OptionsRouteWithChildren =
	OptionsRoute._addFileChildren(OptionsRouteChildren);

interface OrderRouteChildren {
	OrderOrderIdRoute: typeof OrderOrderIdRoute;
}

const OrderRouteChildren: OrderRouteChildren = {
	OrderOrderIdRoute: OrderOrderIdRoute,
};

const OrderRouteWithChildren = OrderRoute._addFileChildren(OrderRouteChildren);

export interface FileRoutesByFullPath {
	"/": typeof IndexRoute;
	"/$": typeof SplatRoute;
	"/creator": typeof CreatorRouteWithChildren;
	"/options": typeof OptionsRouteWithChildren;
	"/order": typeof OrderRouteWithChildren;
	"/creator/$": typeof CreatorSplatRoute;
	"/creator/$categoryId": typeof CreatorCategoryIdRoute;
	"/creator/deletedorder": typeof CreatorDeletedorderRoute;
	"/creator/orderdata": typeof CreatorOrderdataRoute;
	"/creator/success": typeof CreatorSuccessRouteWithChildren;
	"/creator/wrongplace": typeof CreatorWrongplaceRoute;
	"/options/$": typeof OptionsSplatRoute;
	"/options/category": typeof OptionsCategoryRouteWithChildren;
	"/options/new": typeof OptionsNewRoute;
	"/order/$orderId": typeof OrderOrderIdRoute;
	"/creator/": typeof CreatorIndexRoute;
	"/options/": typeof OptionsIndexRoute;
	"/creator/success/$orderId": typeof CreatorSuccessOrderIdRouteWithChildren;
	"/options/category/$categoryId": typeof OptionsCategoryCategoryIdRouteWithChildren;
	"/creator/success/$orderId/delete": typeof CreatorSuccessOrderIdDeleteRoute;
	"/options/category/$categoryId/$partId": typeof OptionsCategoryCategoryIdPartIdRoute;
	"/options/category/$categoryId/delete": typeof OptionsCategoryCategoryIdDeleteRoute;
	"/options/category/$categoryId/newPart": typeof OptionsCategoryCategoryIdNewPartRoute;
}

export interface FileRoutesByTo {
	"/": typeof IndexRoute;
	"/$": typeof SplatRoute;
	"/order": typeof OrderRouteWithChildren;
	"/creator/$": typeof CreatorSplatRoute;
	"/creator/$categoryId": typeof CreatorCategoryIdRoute;
	"/creator/deletedorder": typeof CreatorDeletedorderRoute;
	"/creator/orderdata": typeof CreatorOrderdataRoute;
	"/creator/success": typeof CreatorSuccessRouteWithChildren;
	"/creator/wrongplace": typeof CreatorWrongplaceRoute;
	"/options/$": typeof OptionsSplatRoute;
	"/options/category": typeof OptionsCategoryRouteWithChildren;
	"/options/new": typeof OptionsNewRoute;
	"/order/$orderId": typeof OrderOrderIdRoute;
	"/creator": typeof CreatorIndexRoute;
	"/options": typeof OptionsIndexRoute;
	"/creator/success/$orderId": typeof CreatorSuccessOrderIdRouteWithChildren;
	"/options/category/$categoryId": typeof OptionsCategoryCategoryIdRouteWithChildren;
	"/creator/success/$orderId/delete": typeof CreatorSuccessOrderIdDeleteRoute;
	"/options/category/$categoryId/$partId": typeof OptionsCategoryCategoryIdPartIdRoute;
	"/options/category/$categoryId/delete": typeof OptionsCategoryCategoryIdDeleteRoute;
	"/options/category/$categoryId/newPart": typeof OptionsCategoryCategoryIdNewPartRoute;
}

export interface FileRoutesById {
	__root__: typeof rootRoute;
	"/": typeof IndexRoute;
	"/$": typeof SplatRoute;
	"/creator": typeof CreatorRouteWithChildren;
	"/options": typeof OptionsRouteWithChildren;
	"/order": typeof OrderRouteWithChildren;
	"/creator/$": typeof CreatorSplatRoute;
	"/creator/$categoryId": typeof CreatorCategoryIdRoute;
	"/creator/deletedorder": typeof CreatorDeletedorderRoute;
	"/creator/orderdata": typeof CreatorOrderdataRoute;
	"/creator/success": typeof CreatorSuccessRouteWithChildren;
	"/creator/wrongplace": typeof CreatorWrongplaceRoute;
	"/options/$": typeof OptionsSplatRoute;
	"/options/category": typeof OptionsCategoryRouteWithChildren;
	"/options/new": typeof OptionsNewRoute;
	"/order/$orderId": typeof OrderOrderIdRoute;
	"/creator/": typeof CreatorIndexRoute;
	"/options/": typeof OptionsIndexRoute;
	"/creator/success/$orderId": typeof CreatorSuccessOrderIdRouteWithChildren;
	"/options/category/$categoryId": typeof OptionsCategoryCategoryIdRouteWithChildren;
	"/creator/success/$orderId/delete": typeof CreatorSuccessOrderIdDeleteRoute;
	"/options/category/$categoryId/$partId": typeof OptionsCategoryCategoryIdPartIdRoute;
	"/options/category/$categoryId/delete": typeof OptionsCategoryCategoryIdDeleteRoute;
	"/options/category/$categoryId/newPart": typeof OptionsCategoryCategoryIdNewPartRoute;
}

export interface FileRouteTypes {
	fileRoutesByFullPath: FileRoutesByFullPath;
	fullPaths:
		| "/"
		| "/$"
		| "/creator"
		| "/options"
		| "/order"
		| "/creator/$"
		| "/creator/$categoryId"
		| "/creator/deletedorder"
		| "/creator/orderdata"
		| "/creator/success"
		| "/creator/wrongplace"
		| "/options/$"
		| "/options/category"
		| "/options/new"
		| "/order/$orderId"
		| "/creator/"
		| "/options/"
		| "/creator/success/$orderId"
		| "/options/category/$categoryId"
		| "/creator/success/$orderId/delete"
		| "/options/category/$categoryId/$partId"
		| "/options/category/$categoryId/delete"
		| "/options/category/$categoryId/newPart";
	fileRoutesByTo: FileRoutesByTo;
	to:
		| "/"
		| "/$"
		| "/order"
		| "/creator/$"
		| "/creator/$categoryId"
		| "/creator/deletedorder"
		| "/creator/orderdata"
		| "/creator/success"
		| "/creator/wrongplace"
		| "/options/$"
		| "/options/category"
		| "/options/new"
		| "/order/$orderId"
		| "/creator"
		| "/options"
		| "/creator/success/$orderId"
		| "/options/category/$categoryId"
		| "/creator/success/$orderId/delete"
		| "/options/category/$categoryId/$partId"
		| "/options/category/$categoryId/delete"
		| "/options/category/$categoryId/newPart";
	id:
		| "__root__"
		| "/"
		| "/$"
		| "/creator"
		| "/options"
		| "/order"
		| "/creator/$"
		| "/creator/$categoryId"
		| "/creator/deletedorder"
		| "/creator/orderdata"
		| "/creator/success"
		| "/creator/wrongplace"
		| "/options/$"
		| "/options/category"
		| "/options/new"
		| "/order/$orderId"
		| "/creator/"
		| "/options/"
		| "/creator/success/$orderId"
		| "/options/category/$categoryId"
		| "/creator/success/$orderId/delete"
		| "/options/category/$categoryId/$partId"
		| "/options/category/$categoryId/delete"
		| "/options/category/$categoryId/newPart";
	fileRoutesById: FileRoutesById;
}

export interface RootRouteChildren {
	IndexRoute: typeof IndexRoute;
	SplatRoute: typeof SplatRoute;
	CreatorRoute: typeof CreatorRouteWithChildren;
	OptionsRoute: typeof OptionsRouteWithChildren;
	OrderRoute: typeof OrderRouteWithChildren;
}

const rootRouteChildren: RootRouteChildren = {
	IndexRoute: IndexRoute,
	SplatRoute: SplatRoute,
	CreatorRoute: CreatorRouteWithChildren,
	OptionsRoute: OptionsRouteWithChildren,
	OrderRoute: OrderRouteWithChildren,
};

export const routeTree = rootRoute
	._addFileChildren(rootRouteChildren)
	._addFileTypes<FileRouteTypes>();

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/$",
        "/creator",
        "/options",
        "/order"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/$": {
      "filePath": "$.tsx"
    },
    "/creator": {
      "filePath": "creator.tsx",
      "children": [
        "/creator/$",
        "/creator/$categoryId",
        "/creator/deletedorder",
        "/creator/orderdata",
        "/creator/success",
        "/creator/wrongplace",
        "/creator/"
      ]
    },
    "/options": {
      "filePath": "options.tsx",
      "children": [
        "/options/$",
        "/options/category",
        "/options/new",
        "/options/"
      ]
    },
    "/order": {
      "filePath": "order.tsx",
      "children": [
        "/order/$orderId"
      ]
    },
    "/creator/$": {
      "filePath": "creator/$.tsx",
      "parent": "/creator"
    },
    "/creator/$categoryId": {
      "filePath": "creator/$categoryId.tsx",
      "parent": "/creator"
    },
    "/creator/deletedorder": {
      "filePath": "creator/deletedorder.tsx",
      "parent": "/creator"
    },
    "/creator/orderdata": {
      "filePath": "creator/orderdata.tsx",
      "parent": "/creator"
    },
    "/creator/success": {
      "filePath": "creator/success.tsx",
      "parent": "/creator",
      "children": [
        "/creator/success/$orderId"
      ]
    },
    "/creator/wrongplace": {
      "filePath": "creator/wrongplace.tsx",
      "parent": "/creator"
    },
    "/options/$": {
      "filePath": "options/$.tsx",
      "parent": "/options"
    },
    "/options/category": {
      "filePath": "options/category.tsx",
      "parent": "/options",
      "children": [
        "/options/category/$categoryId"
      ]
    },
    "/options/new": {
      "filePath": "options/new.tsx",
      "parent": "/options"
    },
    "/order/$orderId": {
      "filePath": "order/$orderId.tsx",
      "parent": "/order"
    },
    "/creator/": {
      "filePath": "creator/index.tsx",
      "parent": "/creator"
    },
    "/options/": {
      "filePath": "options/index.tsx",
      "parent": "/options"
    },
    "/creator/success/$orderId": {
      "filePath": "creator/success/$orderId.tsx",
      "parent": "/creator/success",
      "children": [
        "/creator/success/$orderId/delete"
      ]
    },
    "/options/category/$categoryId": {
      "filePath": "options/category/$categoryId.tsx",
      "parent": "/options/category",
      "children": [
        "/options/category/$categoryId/$partId",
        "/options/category/$categoryId/delete",
        "/options/category/$categoryId/newPart"
      ]
    },
    "/creator/success/$orderId/delete": {
      "filePath": "creator/success/$orderId.delete.tsx",
      "parent": "/creator/success/$orderId"
    },
    "/options/category/$categoryId/$partId": {
      "filePath": "options/category/$categoryId.$partId.tsx",
      "parent": "/options/category/$categoryId"
    },
    "/options/category/$categoryId/delete": {
      "filePath": "options/category/$categoryId.delete.tsx",
      "parent": "/options/category/$categoryId"
    },
    "/options/category/$categoryId/newPart": {
      "filePath": "options/category/$categoryId.newPart.tsx",
      "parent": "/options/category/$categoryId"
    }
  }
}
ROUTE_MANIFEST_END */
