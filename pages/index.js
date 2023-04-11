import Gallery from "@/components/Gallery";
import React, { useState } from "react";

const index = () => {
    const [isShow, setIsShow] = useState(true);

    return (
        <div>
            <button onClick={() => setIsShow(!isShow)}>
                {isShow ? "Hide" : "Show"}
            </button>
            {isShow && <Gallery />}
        </div>
    );
};

export default index;
