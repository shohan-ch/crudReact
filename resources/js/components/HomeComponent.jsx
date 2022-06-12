import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
const HomeComponent = () => {
    return (
        <div>
            <div className="bg-slate-300 max-w-2xl px-4 py-3 mx-auto flex justify-center items-center align-middle mt-5">
                <div className="space-y-2">
                    <h2 className="text-xl text-green-900">Home page </h2>
                    <div className="space-x-3 mt-10">
                        <Link to="register" className="my-btn ">
                            {" "}
                            Register
                        </Link>

                        <Link to="contact" className="my-btn ">
                            Login
                        </Link>
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
