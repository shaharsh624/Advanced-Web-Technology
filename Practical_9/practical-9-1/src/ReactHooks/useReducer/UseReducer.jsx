import { useReducer } from "react";
import { ACTION_TYPES } from "./postActionTypes";
import { INITIAL_STATE, postReducer } from "./postReducer";

const Post = () => {
    const [state, dispatch] = useReducer(postReducer, INITIAL_STATE);

    const handleFetch = () => {
        dispatch({ type: ACTION_TYPES.FETCH_START });
        fetch("https://randomuser.me/api/")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                const firstName = data.results[0].name.first;
                const lastName = data.results[0].name.last;

                const greet = { message: "Hi " + firstName + " " + lastName };

                dispatch({ type: ACTION_TYPES.FETCH_SUCCESS, payload: greet });
            })
            .catch(() => {
                dispatch({ type: ACTION_TYPES.FETCH_ERROR });
            });
    };

    return (
        <div>
            <h1>useReducer</h1>
            <button onClick={handleFetch}>
                {state.loading ? "Wait..." : "Fetch the post"}
            </button>
            <p>{state.post?.message}</p>
            <span>{state.error && "Something went wrong!"}</span>
        </div>
    );
};

export default Post;
