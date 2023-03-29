import { useLoaderData } from "react-router-dom";
import ToiletCard from "./ToiletCard";
import "./ToiletBoard.css";

export function ToiletInletBoard() {
    const toiletsLoaded = useLoaderData();
    let toiletArray = toiletsLoaded.map((toilet) => (
        <ToiletCard
            key={toilet._id}
            img={toilet.image}
            name={toilet.name}
            code={toilet.code}
        ></ToiletCard>
    ));

    return (
        <div className="ToiletBoard">
            <h4>Toilets</h4>
            <div className="ToiletDisplay">{toiletArray}</div>
        </div>
    );
}

export async function loader({ params }) {
    let inletType = params.inletType;
    const response = await fetch(
        `http://localhost:4000/show/toilets/${inletType}`
    );
    const body = await response.json();
    return body;
}
