import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h2>Welcome to the Home Page</h2>
            <div>
                <Link to="/feedback">
                    <button>Fill Customer Feedback</button>
                </Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/student">
                    <button>Fill Student Data</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;
