import { useLocation } from "react-router-dom";
import "./ThankYouPage.css";

const ThankYouPage = () => {
    const location = useLocation();
    const formData = location.state;

    return (
        <div className="thank-you-container">
            <h2 className="thank-you-heading">
                Thank You! for giving feedback
            </h2>
            <div className="thank-you-details">
                <p>
                    <strong>Name:</strong> {formData.name}
                </p>
                <p>
                    <strong>Rating:</strong> {formData.rating}
                </p>
                <p>
                    <strong>Interested in buying again:</strong>{" "}
                    {formData.interested ? "Yes" : "No"}
                </p>
                <p>
                    <strong>Message:</strong> {formData.message}
                </p>
            </div>
        </div>
    );
};

export default ThankYouPage;
