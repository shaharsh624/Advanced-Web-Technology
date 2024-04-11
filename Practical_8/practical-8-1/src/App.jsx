import { Route, Navigate, Routes } from "react-router-dom";
import CustomerReviewForm from "./CustomerReviewForm";
import ThankYouPage from "./ThankyouPage";
import Acknowledge from "./Acknowledge";
import StudentData from "./StudentData";
import Home from "./Home";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/feedback" element={<CustomerReviewForm />} />
                <Route path="/thankyou" element={<ThankYouPage />} />

                <Route path="/student" element={<StudentData />} />
                <Route path="/acknowledge" element={<Acknowledge />} />

                <Route path="*" element={<Navigate to="/" />}></Route>
            </Routes>
        </div>
    );
}

export default App;
