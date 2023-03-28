import React from "react";
import { Form } from "react-router-dom";

export async function action({ request, parmas }) {
    const formData = await request.formData();
    console.log("FormData", { formData });
    const searchSpecs = Object.fromEntries(formData);
    console.log("search specs", { searchSpecs });
    const response = await fetch("http://localhost:4000", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(searchSpecs),
    });
    return response.json();
}

export function ToiletForm() {
    return (
        <Form method="POST" action="/">
            <div>
                <label htmlFor="wasteType">Select your waste</label>
                <select id="wasteType" name="waste">
                    <option value="STrap">S Trap</option>
                    <option value="PTrap">P Trap</option>
                </select>
            </div>
            <div>
                <label htmlFor="outlet">
                    What is the distance to the center of the waste (mm):
                </label>
                <input
                    id="outlet"
                    type="number"
                    name="outlet"
                    min="0"
                    required
                ></input>
            </div>
            <div>
                <p>What is your water inlet position:</p>
                <div className="select inlet-choice">
                    <input
                        type="radio"
                        name="inletType"
                        id="bottomInlet"
                        value="bottomInlet"
                        defaultChecked
                    />
                    <label htmlFor="bottomInlet">Bottom Inlet</label>
                    <input
                        type="radio"
                        name="inletType"
                        id="backInlet"
                        value="backInlet"
                    />
                    <label htmlFor="backInlet">Back Inlet</label>
                </div>
            </div>
            <div>
                <label htmlFor="inletHeight">
                    What is the height of your water point (mm)
                </label>
                <input
                    id="inletHeight"
                    type="number"
                    name="inletHeight"
                    min="0"
                    required
                ></input>
            </div>
            <div>
                <label htmlFor="inletOffset">
                    What is the height of your water point (mm)
                </label>
                <input
                    id="inletOffset"
                    type="number"
                    name="inletOffset"
                    min="0"
                    required
                ></input>
            </div>
            <button type="submit">Submit</button>
        </Form>
    );
}
