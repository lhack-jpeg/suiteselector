import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry an error has occured</p>
            <p>
                <i>{error.StatusText || error.message}</i>
            </p>
        </div>
    );
}
