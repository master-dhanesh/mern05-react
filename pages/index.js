import Create from "@/components/Create";
import { useState } from "react";

const index = () => {
    const [tasks, setTasks] = useState([]);

    const DeleteHandler = (id) => {
        const copyTasks = tasks.filter((task) => task.id !== id);
        setTasks(copyTasks);
    };

    let taskslist = (
        <h4 className="text-center fs-4 fw-light text-danger">
            No pending tasks found
        </h4>
    );

    if (tasks.length > 0) {
        taskslist = tasks.map((task, index) => (
            <li
                key={task.id}
                className="fs-4 d-flex justify-content-between list-group-item"
            >
                {task.title}
                <i
                    onClick={() => DeleteHandler(task.id)}
                    className="text-danger ri-delete-bin-2-line"
                ></i>
            </li>
        ));
    }

    return (
        <div className="container mt-5 p-5 bg-light">
            {/* {Create(tasks,setTasks)} */}
            {/* <Create tasks={tasks} setTasks={setTasks} /> */}
            <Create tasks={tasks} setTasks={setTasks}>
                <h1>Bahut he jyaza secret information</h1>
            </Create>

            <hr />
            <ul className="list-group w-50">
                <h3 className="mb-3 fs-3 fw-light">Pending tasks</h3>
                {taskslist}
            </ul>
        </div>
    );
};

export default index;
