import { useForm } from "react-hook-form";

export default () => {
    const { handleSubmit, register } = useForm();

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
                                        {...register("name")}
                                        id="name"
                                        placeholder="Name"
                                    />
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
                                <button
                                    type="submit"
                                    className="btn btn-primary mt-3"
                                >
                                    Register
                                </button>
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
