import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import { ToiletBoard, loader as ToiletLoader } from "./components/ToiletBoard";
import {
    ToiletInletBoard,
    loader as ToiletInletLoader,
} from "./components/ToiletInletBoard";
import { SingleToilet, FindOneToilet } from "./components/SingleToilet";
import {
    ToiletSearchForm,
    action as SearchAction,
} from "./components/ToiletSearch";
import App from "./App";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <ErrorPage />,
        children: [
            {
                loader: ToiletLoader,
                path: "show",
                element: <ToiletBoard />,
            },
            {
                loader: ToiletInletLoader,
                path: "show/toilets/:inletType",
                element: <ToiletInletBoard />,
            },
            {
                loader: FindOneToilet,
                path: "show/:code",
                element: <SingleToilet />,
            },
            {
                path: "/",
                action: SearchAction,
                element: <ToiletSearchForm />,
            },
        ],
    },
]);
