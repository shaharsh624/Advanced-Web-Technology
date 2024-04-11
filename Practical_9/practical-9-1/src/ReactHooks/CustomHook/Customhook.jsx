import useFetch from "./useFetch";

const Customhook = () => {
    const data = useFetch("https://jsonplaceholder.typicode.com/todos");

    return (
        <div className="card">
            <h1>Custom Hook</h1>
            {data &&
                data.map((item) => {
                    return <p key={item.id}>{item.title}</p>;
                })}
        </div>
    );
};

export default Customhook;
