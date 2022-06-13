import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
const HomeComponent = () => {
    return (
        <div className="flex items-center h-screen justify-center">
            <div className="p-8 rounded-lg space-y-2 shadow-xl bg-sky-300 ">
                <div className="space-y-8">
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
