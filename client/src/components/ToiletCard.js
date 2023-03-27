import React from "react";
import { Link } from "react-router-dom";

export default function ToiletCard({ img, name, code }) {
    return (
        <div>
            <img src={img} alt={name} />
            <h4>{name}</h4>
            <Link to={`/show/${code}`}>View Toilet</Link>
        </div>
    );
}
