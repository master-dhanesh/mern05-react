import { useState } from "react";
import { nanoid } from "nanoid";
import css from "../styles/Create.module.css";

const Create = (props) => {
    console.log(props);
    const { tasks, setTasks } = props;
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const CreateTaskHandler = (e) => {
        e.preventDefault();
        const todo = {
            id: nanoid(),
            title,
            desc,
        };
        setTasks([...tasks, todo]);
        setTitle("");
        setDesc("");
    };

    const style = {
        fontWeight: "100",
        color: "tomato",
        textAlign: "center",
    };

    return (
        <>
            {/* inline css  */}
            {/* <h1 style={{ fontWeight: "100", color: "tomato" }}>
                {props.children}
            </h1> */}

            {/* internal css */}
            {/* <h1 style={style}>{props.children}</h1> */}

            {/* external css */}
            <h1 className={`${css.createH1} bg-dark`}>{props.children}</h1>

            {/* ---------------------------------------------- */}
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
        </>
    );
};

export default Create;
