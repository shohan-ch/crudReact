import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
const HomeComponent = () => {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card text-center ">
                        <div className="card-header">
                            <h2>Home page here</h2>
                        </div>
                        <div className="card-body py-5">
                            <p className="fw-bold"> Welcome User: </p>
                            <div className="d-flex justify-content-center mt-5">
                                <Link
                                    to="contact"
                                    className="btn btn-primary me-3"
                                >
                                    {" "}
                                    Register
                                </Link>

                                <Link to="contact" className="btn btn-primary">
                                    Login
                                </Link>
                            </div>
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
