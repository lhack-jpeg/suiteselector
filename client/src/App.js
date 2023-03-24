import "./App.css";
import ToiletBoard from "./components/ToiletBoard";
import NavBar from "./components/NavBar";
import ToiletForm from "./components/ToiletSearch";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <NavBar />
            <Routes>
                <Route
                    exact
                    path="/"
                    element={<ToiletForm />}
                    action={async ({ params, request }) => {
                        let formData = await request.formData();
                        console.log(formData);
                    }}
                />
                <Route exact path="/show" element={<ToiletBoard />} />
                <Route
                    exact
                    path="/show/toilets/backInlet"
                    element={<ToiletBoard />}
                />
                <Route />
            </Routes>
        </div>
    );
}

export default App;
