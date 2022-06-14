import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
const HomeComponent = () => {
    const toggleModal = () => {
        document.getElementById("modal").classList.toggle("hidden");
    };
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

            <div class="flex items-center justify-center h-full">
                <button
                    class="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700"
                    onClick={toggleModal}
                >
                    Show Modal
                </button>
            </div>
            <div
                class="fixed z-10 overflow-y-auto top-0 w-full left-0 hidden"
                id="modal"
            >
                <div class="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div class="fixed inset-0 transition-opacity">
                        <div class="absolute inset-0 bg-gray-900 opacity-75" />
                    </div>
                    <span class="hidden sm:inline-block sm:align-middle sm:h-screen">
                        &#8203;
                    </span>
                    <div
                        class="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="modal-headline"
                    >
                        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <label>Name</label>
                            <input
                                type="text"
                                class="w-full bg-gray-100 p-2 mt-2 mb-3"
                            />
                            <label>Url</label>
                            <input
                                type="text"
                                class="w-full bg-gray-100 p-2 mt-2 mb-3"
                            />
                        </div>
                        <div class="bg-gray-200 px-4 py-3 text-right">
                            <button
                                type="button"
                                class="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2"
                                onClick={toggleModal}
                            >
                                <i class="fas fa-times"></i> Cancel
                            </button>
                            <button
                                type="button"
                                class="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 mr-2"
                            >
                                <i class="fas fa-plus"></i> Create
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default HomeComponent;
