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
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h2>Please Register here</h2>
                    </div>
                    <div className="card-body">
                        <div style={style.formDiv}>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
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

                                <Button type="primary" htmlType="submit">
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
