import React, { useContext } from "react";
import { DetsContext } from "../context/Context";
const Admin = () => {
    const [dets, setDets] = useContext(DetsContext);
    console.log(dets);
    return (
        <div>
            <h1 className="text-danger fw-light fs-1">Hello From Admin</h1>
        </div>
    );
};

export default Admin;
