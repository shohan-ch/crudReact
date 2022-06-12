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
            <div className="mx-auto max-w-lg shadow-lg py-8 px-8 rounded-md space-y-2 ">
                <h2 className="text-black text-center font-medium text-2xl">
                    Registration form
                </h2>

                <form className="space-y-3">
                    <div>
                        <label htmlFor="name" className="block font-medium ">
                            Name
                        </label>
                        <input type="text" className="" placeholder="Name" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block font-medium ">
                            Email
                        </label>
                        <input
                            type="email"
                            className="mt-1"
                            placeholder="Email"
                        />
                    </div>

                    <div>
                        <label htmlFor="gender" className="block font-medium ">
                            Gender
                        </label>
                        <select
                            name="gender"
                            id="gender"
                            className="w-full rounded-md py-1 focus:border-indigo-500"
                        >
                            <option value="">Select</option>
                            <option value="m">Male</option>
                            <option value="f">Female</option>
                        </select>
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
