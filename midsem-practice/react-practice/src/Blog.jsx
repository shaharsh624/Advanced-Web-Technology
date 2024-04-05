import React from "react";

const Blog = (props) => {
    return (
        <>
            <h1>Name: {props.name}</h1>
            <h2>Phone Number: {props.phone}</h2>
            <h3>Email: {props.email}</h3>
        </>
    );
};

export default Blog;
