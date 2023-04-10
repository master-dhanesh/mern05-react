import React from "react";

const Show = (props) => {
    const { tasks, setTasks } = props;
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
        <ul className="list-group w-50">
            <h3 className="mb-3 fs-3 fw-light">Pending tasks</h3>
            {taskslist}
        </ul>
    );
};

export default Show;
