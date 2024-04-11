import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./FormData.css";

const StudentData = () => {
    const nameRef = useRef(null);
    const divisionRef = useRef(null);
    const messageRef = useRef(null);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const name = nameRef.current.value;
        const division = divisionRef.current.value;
        const message = messageRef.current.value;

        navigate("/acknowledge", {
            state: {
                name,
                division,
                message,
            },
        });
    };

    return (
        <div>
            <h1>Student Details Form</h1>
            <form onSubmit={handleSubmit}>
                <table className="form-table">
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor="name">Name:</label>
                            </td>
                            <td>
                                <input type="text" id="name" ref={nameRef} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="division">Division:</label>
                            </td>
                            <td>
                                <select id="division" ref={divisionRef}>
                                    <option value="1">Division 1</option>
                                    <option value="2">Division 2</option>
                                    <option value="3">Division 3</option>
                                    <option value="4">Division 4</option>
                                    <option value="5">Division 5</option>
                                    <option value="6">Division 6</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="message">Message:</label>
                            </td>
                            <td>
                                <textarea
                                    id="message"
                                    ref={messageRef}
                                ></textarea>
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

export default StudentData;
