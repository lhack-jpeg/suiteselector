import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ToiletCard from "./ToiletCard";
import "./ToiletBoard.css";

export function ToiletBoard() {
    const toiletsLoaded = useLoaderData();
    let toiletArray;
    toiletsLoaded.hasOwnProperty("toilets")
        ? (toiletArray = toiletsLoaded.toilets.map((toilet) => (
              <ToiletCard
                  key={toilet._id}
                  img={toilet.image}
                  name={toilet.name}
                  code={toilet.code}
              ></ToiletCard>
          )))
        : (toiletArray = toiletsLoaded.map((toilet) => (
              <ToiletCard
                  key={toilet._id}
                  img={toilet.image}
                  name={toilet.name}
                  code={toilet.code}
              ></ToiletCard>
          )));

    return (
        <div className="ToiletBoard">
            <h4>Toilets</h4>
            <div className="ToiletDisplay">{toiletArray}</div>
        </div>
    );
}

export async function loader({ params }) {
    if (params.hasOwnProperty("inletType")) {
        let inletType = params.inletType;
        const response = await fetch(
            `http://localhost:4000/show/toilets/${inletType}`
        );
        const body = await response.json();
        console.log({ body }, "Inside Inlet Loader");
        return body;
    } else {
        const response = await fetch("http://localhost:4000/show");
        const body = await response.json();
        console.log({ body }, "Inside Loader");
        return body;
    }
}
