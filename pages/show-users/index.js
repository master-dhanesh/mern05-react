import { UserContext } from "@/Context/Context";
import React, { useContext } from "react";
import Link from "next/link";

const ShowUser = () => {
    const [users, setUsers] = useContext(UserContext);

    const DeleteHandler = (id) => {
        let fu = users.filter((u) => u.id !== id);
        setUsers(fu);
    };

    let renderUsers = "Loading...";
    if (users.length > 0) {
        renderUsers = users.map((u) => (
            <li
                key={u.id}
                className=" d-flex justify-content-between  align-items-center list-group-item"
            >
                <p className="m-0">{u.name}</p>
                <p className="m-0">
                    <Link href={`/show-users/edit/${u.id}`}>✏️</Link>{" "}
                    &nbsp;&nbsp;
                    <span onClick={() => DeleteHandler(u.id)}>❌</span>
                </p>
            </li>
        ));
    }

    return (
        <div className="container mt-5 p-5 bg-light">
            <Link className="fs-5 fw-light mb-3" href="/">
                Home
            </Link>
            &nbsp; &nbsp;
            <Link className="fs-5 fw-light mb-3" href="/create-user">
                Create User
            </Link>
            <hr />
            <ul className="w-50 list-group">{renderUsers}</ul>
        </div>
    );
};

export default ShowUser;
