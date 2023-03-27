import { createBrowserRouter } from "react-router-dom";
import { ToiletBoard, loader as ToiletLoader } from "./components/ToiletBoard";
import { SingleToilet, FindOneToilet } from "./components/SingleToilet";
import ToiletForm from "./components/ToiletSearch";
import App from "./App";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                loader: ToiletLoader,
                path: "show",
                element: <ToiletBoard />,
            },
            {
                loader: FindOneToilet,
                path: "show/:code",
                element: <SingleToilet />,
            },
            {
                path: "/",
                element: <ToiletForm />,
            },
        ],
    },
]);
