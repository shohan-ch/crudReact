import { Button } from "antd";
import { useForm } from "react-hook-form";

export default () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();

    const onSubmit = (values) => {
        alert(JSON.stringify(values));
        console.log(values);
    };
    return (
        <>
            <div className="mx-auto max-w-lg shadow-lg py-8 px-8 rounded-md space-y-2 bg-blue-300 ">
                <h2 className="text-black text-center font-medium text-2xl">
                    Registration form
                </h2>

                <form>
                    <div>
                        <input
                            type="text"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </div>
                </form>
            </div>

            <div>
                <p className="text-indigo-800 mt-9">Name</p>
                <div className="card">
                    <div className="card-header">
                        <h2 className="text-indigo-200 bg-stone-700">
                            Please Register here
                        </h2>
                    </div>
                    <div className="card-body">
                        <div style={style.formDiv}>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group">
                                    <label
                                        htmlFor="name"
                                        className="text-slate-500"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        {...register("name", {
                                            required: true,
                                        })}
                                        id="name"
                                        placeholder="Name"
                                    />

                                    {errors.name && (
                                        <span className="text-danger">
                                            Name is required
                                        </span>
                                    )}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        {...register("email")}
                                        id="name"
                                        placeholder="Email"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">Phone</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        {...register("phone")}
                                        id="name"
                                        placeholder="Phone"
                                    />
                                </div>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    className="btn btn-danger"
                                >
                                    Submit
                                </Button>
                            </form>
                        </div>
                    </div>
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
