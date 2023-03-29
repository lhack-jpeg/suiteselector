import React from "react";
import { useActionData } from "react-router-dom";
import { ToiletForm } from "./ToiletForm";
import ToiletCard from "./ToiletCard";
import "./ToiletBoard.css";

export async function action({ request, params }) {
    const formData = await request.formData();
    var parameters = [];
    for (var pair of formData.entries()) {
        console.log(pair[0], pair[1]);
        parameters.push(
            encodeURIComponent(pair[0]) + "=" + encodeURIComponent(pair[1])
        );
    }
    const response = await fetch("http://localhost:4000/", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: parameters.join("&"),
    });
    return response.json();
}

export function ToiletSearchForm() {
    const actionData = useActionData();
    let toiletArray;
    actionData &&
        (toiletArray = actionData.map((toilet) => (
            <ToiletCard
                key={toilet._id}
                img={toilet.image}
                name={toilet.name}
                code={toilet.code}
            />
        )));
    return actionData ? (
        <div className="ToiletBoard">
            <h1>Search Results</h1>
            <div className="ToiletDisplay">{toiletArray}</div>
        </div>
    ) : (
        <ToiletForm />
    );
}
