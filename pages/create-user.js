import { UserContext } from "@/Context/Context";
import { nanoid } from "nanoid";
import Link from "next/link";
import { useContext, useState } from "react";
import { toast } from "react-toastify";

const CreateUser = () => {
    const [users, setUsers] = useContext(UserContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");

    const SubmitHandler = (e) => {
        e.preventDefault();

        if (
            name.trim().length === 0 ||
            email.trim().length === 0 ||
            contact.trim().length === 0
        ) {
            toast.error("Chutiya hai kya!!!");
            return;
        }

        const user = {
            id: nanoid(),
            name,
            email,
            contact,
        };
        setUsers([...users, user]);
        toast("User registered successfully!");
        setName("");
        setEmail("");
        setContact("");
    };

    return (
        <div className="w-50 container mt-5 p-5 bg-light">
            <Link className="fs-5 fw-light mb-3" href="/">
                Home
            </Link>
            &nbsp; &nbsp;
            <Link className="fs-5 fw-light mb-3" href="/show-users">
                Show User
            </Link>
            <hr />
            <form onSubmit={SubmitHandler}>
                <h2 className="fs-2 fw-light ">Register user</h2>
                <input
                    type="text"
                    placeholder="Name"
                    className="form-control mb-3"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <input
                    type="text"
                    placeholder="Email"
                    className="form-control mb-3"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <input
                    type="text"
                    placeholder="Contact"
                    className="form-control mb-3"
                    onChange={(e) => setContact(e.target.value)}
                    value={contact}
                />
                <button className="btn btn-dark">Add User</button>
            </form>
        </div>
    );
};

export default CreateUser;
