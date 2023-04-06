import { useState } from "react";
import { nanoid } from "nanoid";

const index = () => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const CreateTaskHandler = (e) => {
        e.preventDefault();
        const todo = {
            id: nanoid(),
            title,
            desc,
        };
        console.log(todo);
    };

    // const ChangeHandler = (e) => setTitle(e.target.value);

    return (
        <div className="container mt-5 p-5 bg-light">
            <h2 className="mb-5 fs-2 fw-light">Todo-App</h2>

            <form onSubmit={CreateTaskHandler}>
                <input
                    type="text"
                    placeholder="title"
                    className="mb-3 w-50 form-control"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <input
                    type="text"
                    placeholder="Desctiption"
                    className="mb-3 w-50 form-control"
                    onChange={(e) => setDesc(e.target.value)}
                    value={desc}
                />
                <button className="btn btn-primary">Create Task</button>
            </form>

            <hr />

            <ul className="list-group w-50">
                <h3 className="mb-3 fs-3 fw-light">Pending tasks</h3>

                <li className="fs-4 d-flex justify-content-between list-group-item">
                    Item 1<i className="text-danger ri-delete-bin-2-line"></i>
                </li>
            </ul>
        </div>
    );
};

export default index;
