import React from "react";
import ReactDOM from "react-dom";

export default () => {
    return <h2>Hello React</h2>;
};

if (document.getElementById("react")) {
    ReactDOM.render(<React />, document.getElementById("react"));
}
