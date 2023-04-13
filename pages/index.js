import Gallery from "@/components/Gallery";
import React, { useState } from "react";

const index = () => {
    const [isShow, setIsShow] = useState(true);

    return (
        <div className="container mt-5 p-5 bg-light">
            <button
                className="btn btn-dark mb-3"
                onClick={() => setIsShow(!isShow)}
            >
                {isShow ? "Hide" : "Show"}
            </button>
            {isShow && <Gallery />}
        </div>
    );
};

export default index;
