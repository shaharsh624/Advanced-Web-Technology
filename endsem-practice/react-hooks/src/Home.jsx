import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h2>Let us learn React Hooks</h2>
            <div>
                <Link to="/state">
                    <button>useState</button>
                </Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/effect">
                    <button>useEffect</button>
                </Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/memo">
                    <button>useMemo</button>
                </Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/ref">
                    <button>useRef</button>
                </Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/context">
                    <button>useContext</button>
                </Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/reducer">
                    <button>useReducer</button>
                </Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/callback">
                    <button>useCallback</button>
                </Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/customhook">
                    <button>Custom Hook</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;
