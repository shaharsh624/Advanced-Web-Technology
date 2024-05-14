import { useState, createContext, useContext } from "react";

const UserContext = createContext();

function UseContext() {
    const [user] = useState("AWT Student");

    return (
        <UserContext.Provider value={user}>
            <h2>{`Hello ${user}!`}</h2>
            <Component2 />
        </UserContext.Provider>
    );
}

function Component2() {
    return (
        <>
            <h2>Component 2</h2>
            <Component3 />
        </>
    );
}

function Component3() {
    return (
        <>
            <h2>Component 3</h2>
            <Component4 />
        </>
    );
}

function Component4() {
    return (
        <>
            <h2>Component 4</h2>
            <Component5 />
        </>
    );
}

function Component5() {
    const user = useContext(UserContext);

    return (
        <>
            <h2>Component 5</h2>
            <h2>{`Hello ${user} again!`}</h2>
        </>
    );
}

export default UseContext;
