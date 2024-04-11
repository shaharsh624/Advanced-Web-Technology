import { useLocation } from "react-router-dom";
import "./ThankYouPage.css";

const Acknowledge = () => {
    const location = useLocation();
    const formData = location.state;

    return (
        <div className="thank-you-container">
            <h2 className="thank-you-heading">Thank You for Your Feedback!</h2>
            <div className="thank-you-details">
                <p>
                    <strong>Name:</strong> {formData.name}
                </p>
                <p>
                    <strong>Division:</strong> {formData.division}
                </p>
                <p>
                    <strong>Message:</strong> {formData.message}
                </p>
            </div>
        </div>
    );
};

export default Acknowledge;
