import type { RouteProps } from "react-router-dom";
import { Mainpage } from "../../../pages/Mainpage";
import { Howtouse } from "../../../pages/HowToUse";
import { NotFoundpage } from "../../../pages/NotFoundpage";

export enum AppRoutes {
  MAINPAGE = "main",
  HOWTOUSE = "howtouse",
  NOT_FOUND = "*",
}

export const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAINPAGE]: "/",
    [AppRoutes.HOWTOUSE]: "/howtouse",
    [AppRoutes.NOT_FOUND]: "*",
};

export const RouteConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAINPAGE]: {
        path: RoutePaths[AppRoutes.MAINPAGE],
        element: <Mainpage />,
    },

    [AppRoutes.HOWTOUSE]: {
        path: RoutePaths[AppRoutes.HOWTOUSE],
        element: <Howtouse />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePaths[AppRoutes.NOT_FOUND],
        element: <NotFoundpage />,
    },
};
