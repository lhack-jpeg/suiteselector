import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import { ToiletBoard, loader as ToiletLoader } from "./components/ToiletBoard";
import { SingleToilet, FindOneToilet } from "./components/SingleToilet";
import { ToiletForm, action as SearchAction } from "./components/ToiletSearch";
import App from "./App";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <ErrorPage />,
        children: [
            {
                loader: ToiletLoader,
                action: SearchAction,
                path: "show",
                element: <ToiletBoard />,
            },
            {
                loader: ToiletLoader,
                path: "show/toilets/:inletType",
                element: <ToiletBoard />,
            },
            {
                loader: FindOneToilet,
                path: "show/:code",
                element: <SingleToilet />,
            },
            {
                path: "/",
                action: SearchAction,
                element: <ToiletForm />,
            },
        ],
    },
]);
