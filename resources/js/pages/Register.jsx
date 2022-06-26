import { Button } from "antd";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import AuthenticateServiceApi from "../api/AuthenticateServiceApi";
import useApi from "../hooks/useApi";

export default () => {
    const registerUserApi = useApi(AuthenticateServiceApi.register);
    const jsonApi = useApi(AuthenticateServiceApi.jsonData);

    useEffect(() => {
        jsonApi.request();
        // registerUser.request();
        // registerUser.request();
    }, []);

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();

    const onSubmit = (values) => {
        registerUserApi.request(values);
        // useApi(AuthenticateServiceApi.register(values));
        // registerUserApi(values);
        // alert(JSON.stringify(values));
    };
    return (
        <>
            <div className="h-screen bg-sky-200 flex items-center">
                {/* {registerUser.error && <p>{registerUser.error}</p>} */}
                {/* {registerUserApi.data && <p>{registerUserApi.data}</p>} */}

                <div className="mx-auto py-8 px-8 rounded-lg space-y-2 shadow-xl  bg-white min-w-[20%]">
                    <h2 className="text-black text-center font-medium text-2xl">
                        Registration form
                    </h2>

                    <form
                        className="space-y-3"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div>
                            <label
                                htmlFor="name"
                                className="block font-medium "
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                {...register("name", {
                                    required: true,
                                })}
                                placeholder="Name"
                                {...register("name", {
                                    required: true,
                                })}
                            />
                            {errors.name && (
                                <span className="text-indigo-600">
                                    Name is required
                                </span>
                            )}
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block font-medium "
                            >
                                Email
                            </label>
                            <input
                                {...register("email", {
                                    required: true,
                                })}
                                type="email"
                                className="mt-1"
                                placeholder="Email"
                                {...register("email", {
                                    required: true,
                                })}
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="gender"
                                className="block font-medium "
                            >
                                Gender
                            </label>
                            <select
                                {...register("gender", {
                                    required: true,
                                })}
                                id="gender"
                                className="w-full rounded-md py-1 focus:border-indigo-500"
                                {...register("gender", {
                                    required: true,
                                })}
                            >
                                <option value="">Select</option>
                                <option value="m">Male</option>
                                <option value="f">Female</option>
                            </select>
                        </div>

                        <div>
                            <input
                                type="checkbox"
                                name="checkBox"
                                className=" focus:ring-indigo-700 rounded focus:ring-1 "
                            />
                            <span
                                htmlFor="checkbox"
                                className="font-medium mt-1 ml-2"
                            >
                                Accept terms and conditions.
                            </span>
                        </div>
                        <button
                            className="py-1 bg-red-700 my-btn "
                            type="submit"
                        >
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

const style = {
    formDiv: {
        width: "50%",
        margin: "auto",
        backgroundColor: "coral",
        padding: 50,
        color: "white",
    },
};

// export default Contact;
