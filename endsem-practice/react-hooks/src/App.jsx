import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import UseEffect from "./ReactHooks/UseEffect";
import UseMemo from "./ReactHooks/UseMemo";
import UseRef from "./ReactHooks/UseRef";
import UseState from "./ReactHooks/UseState";
import UseReducer from "./ReactHooks/useReducer/UseReducer.jsx";
import Home from "./Home";
import UseContext from "./ReactHooks/UseContext";
import UseCallback from "./ReactHooks/UseCallbacks.jsx";
import Customhook from "./ReactHooks/CustomHook/Customhook.jsx";

function App() {
    return (
        <div className="card">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/state" element={<UseState />} />
                <Route path="/effect" element={<UseEffect />} />
                <Route path="/memo" element={<UseMemo />} />
                <Route path="/ref" element={<UseRef />} />
                <Route path="/context" element={<UseContext />} />
                <Route path="/reducer" element={<UseReducer />} />
                <Route path="/callback" element={<UseCallback />} />
                <Route path="/customhook" element={<Customhook />} />
                <Route path="*" element={<Navigate to="/" />}></Route>
            </Routes>
        </div>
    );
}

export default App;
