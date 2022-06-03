import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
const HomeComponent = () => {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card text-center">
                        <div className="card-header">
                            <h2>Home page here</h2>
                        </div>
                        <div className="card-body">Welcome User:</div>

                        <div className="d-flex justify-content-center">
                            <Link to="contact">
                                <a className="btn btn-primary me-2">
                                    {" "}
                                    Register
                                </a>
                            </Link>

                            <Link to="contact">
                                <a className="btn btn-primary"> Login</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default HomeComponent;
// DOM element
// if (document.getElementById("root")) {
//     ReactDOM.render(<User />, document.getElementById("root"));
// }
