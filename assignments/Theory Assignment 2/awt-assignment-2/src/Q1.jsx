import { useState } from "react";
import "./App.css";

function Q1() {
    const [, setBooks] = useState([]);
    const [hasError, setHasError] = useState(false);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const selectedBooks = [];

        for (let element of event.target.elements) {
            if (element.checked && element.type === "checkbox") {
                selectedBooks.push(element.value);
            }
        }

        if (!selectedBooks.length) {
            setHasError(true);
            return;
        }

        setBooks(selectedBooks);
        console.log(selectedBooks);
    };

    return (
        <>
            <div>
                <h1>
                    Choose from a wide variety of book available in our store
                </h1>
                {hasError && (
                    <div className="error">
                        <p>Please select at least one book.</p>
                    </div>
                )}

                <form onSubmit={handleFormSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <input
                                        type="checkbox"
                                        value="Zero to one -- Peter Thiel"
                                    />
                                </td>
                                <td>
                                    <label>Zero to one -- Peter Thiel</label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input
                                        type="checkbox"
                                        value="The Monk who sold his ferrari -- Robin Sharma"
                                    />
                                </td>
                                <td>
                                    <label>
                                        The Monk who sold his ferrari -- Robin
                                        Sharma
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input
                                        type="checkbox"
                                        value="The Alchemist -- Paulo Coelho"
                                    />
                                </td>
                                <td>
                                    <label>The Alchemist -- Paulo Coelho</label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input
                                        type="checkbox"
                                        value="The Power of Now -- Eckhart Tolle"
                                    />
                                </td>
                                <td>
                                    <label>
                                        The Power of Now -- Eckhart Tolle
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input
                                        type="checkbox"
                                        value="Wings of fire -- APJ Abdul Kalam"
                                    />
                                </td>
                                <td>
                                    <label>
                                        Wings of fire -- APJ Abdul Kalam
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="submit" value="Submit" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </>
    );
}

export default Q1;
