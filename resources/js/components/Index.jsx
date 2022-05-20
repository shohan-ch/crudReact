export default () => {
    return (
        <>
            <h2>Hello React js</h2>
        </>
    );
};

if (document.getElementById("hello-react")) {
    ReactDOM.render(<HelloReact />, document.getElementById("hello-react"));
}
