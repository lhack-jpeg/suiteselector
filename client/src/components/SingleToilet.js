import { useLoaderData, Link } from "react-router-dom";

export async function FindOneToilet({ params }) {
    let id = params.code;
    console.log(id);
    const response = await fetch(`http://localhost:4000/show/${id}`);
    const body = await response.json();
    console.log(body);
    return { body };
}

export function SingleToilet() {
    const data = useLoaderData();
    const toiletInfo = data.body;
    return (
        <div>
            <h4>{toiletInfo.name}</h4>
            {toiletInfo.PTrapSetOut ? (
                <p>
                    <b>P Trap SetOut</b>: {toiletInfo.PTrapSetOut}
                </p>
            ) : (
                ""
            )}
            <img src={toiletInfo.image} />
            <Link to={toiletInfo.spec}>Get specs</Link>
        </div>
    );
}
