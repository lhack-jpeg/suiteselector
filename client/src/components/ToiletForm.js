import { Form } from "react-router-dom";
import "./toiletform.css";

export function ToiletForm() {
    return (
        <Form method="POST" action="/" className="form">
            <div className="select">
                <label htmlFor="wasteType">Select your waste</label>
                <select id="wasteType" name="waste">
                    <option value="STrap">S Trap</option>
                    <option value="PTrap">P Trap</option>
                </select>
            </div>
            <div className="select">
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
            <div className="select">
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
            <div className="select back-inlet">
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
            <div className="select back-inlet">
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
