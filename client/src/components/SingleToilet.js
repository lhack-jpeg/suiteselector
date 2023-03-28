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
            <SingleToiletSpecDisplay ToiletDataObj={toiletInfo} />
            <img src={toiletInfo.image} />
            <Link to={toiletInfo.spec}>Get specs</Link>
        </div>
    );
}

// @ SingleToiletSpecDisplay
// @ ToiletDataObj: Data obj of a single toilet
// filters out the keys that contains values
// Generates an unordered list of the specs
function SingleToiletSpecDisplay({ ToiletDataObj }) {
    let toiletSpecOptions = [
        "PTrapSetout",
        "STrapMin",
        "STrapMax",
        "STrapSetout",
        "waterPointHeight",
        "waterPointOffset",
    ];
    let toiletSpecs = toiletSpecOptions.filter(
        (key) => ToiletDataObj.hasOwnProperty(key) && ToiletDataObj[key]
    );
    let toiletSpecDisplay = toiletSpecs.map((key) => (
        <li>
            <b>{key}</b>: {ToiletDataObj[key]}
        </li>
    ));
    return <ul>{toiletSpecDisplay}</ul>;
}
