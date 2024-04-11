import "./App.css";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />}>
                        {" "}
                    </Route>
                    <Route path="/blog" element={<Blog />}>
                        {" "}
                    </Route>
                    <Route path="/contact" element={<Contact />}>
                        {" "}
                    </Route>
                    <Route path="/about" element={<About />}>
                        {" "}
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
