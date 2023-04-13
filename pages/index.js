import Admin from "@/components/Admin";
import User from "@/components/User";

const index = () => {
    return (
        <div className="container mt-5 p-5 bg-light">
            <Admin />
            <hr />
            <User />
        </div>
    );
};

export default index;
