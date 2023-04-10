import Create from "@/components/Create";
import Show from "@/components/Show";
import { useState } from "react";

const index = () => {
    const [tasks, setTasks] = useState([]);

    return (
        <div className="container mt-5 p-5 bg-light">
            <h1>TOOOOO DOOOOOO APPPPPP</h1>
            <Create tasks={tasks} setTasks={setTasks}>
                Bahut he jyaza secret information
            </Create>
            <hr />
            <Show tasks={tasks} setTasks={setTasks} />
        </div>
    );
};

export default index;
