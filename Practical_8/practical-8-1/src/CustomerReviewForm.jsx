import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FormData.css";

const CustomerReviewForm = () => {
    const navigate = useNavigate();
    const [submitted, setSubmitted] = useState(false);
    const [name, setName] = useState("");
    const [rating, setRating] = useState("");
    const [interested, setInterested] = useState(false);
    const [message, setMessage] = useState("");

    const submitForm = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    useEffect(() => {
        if (submitted) {
            console.log("Form submitted: ", name, rating, interested, message);
            navigate("/thankyou", {
                replace: true,
                state: { name, rating, interested, message },
            });
        }
    }, [submitted, name, rating, interested, message, navigate]);

    return (
        <div>
            <h1>Feedback Form</h1>
            <form onSubmit={(e) => submitForm(e)}>
                <table className="form-table">
                    <tbody>
                        <tr>
                            <td>
                                <label>Name:</label>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Rating:</label>
                            </td>
                            <td>
                                <select
                                    value={rating}
                                    onChange={(e) => setRating(e.target.value)}
                                >
                                    <option value="">Select</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>
                                    Interested in buying again in future:
                                </label>
                            </td>
                            <td>
                                <label className="checkbox-label">
                                    <input
                                        type="checkbox"
                                        checked={interested}
                                        onChange={(e) =>
                                            setInterested(e.target.checked)
                                        }
                                    />
                                    Yes
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Message (Max 25 characters):</label>
                            </td>
                            <td>
                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    maxLength={25}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <button type="submit">Submit</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
};

export default CustomerReviewForm;
