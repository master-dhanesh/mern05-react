import Link from "next/link";

const index = () => {
    return (
        <div className="container mt-5 p-5 bg-light">
            <Link className="fs-1 fw-light mb-3" href="/create-user">
                Create User
            </Link>
            <br />
            <Link className="fs-1 fw-light mb-3" href="/show-users">
                Show User
            </Link>
        </div>
    );
};

export default index;
