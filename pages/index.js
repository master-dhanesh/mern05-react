import Gallery from "@/components/Gallery";
import React, { useEffect, useState } from "react";

const index = () => {
    const [images, setImages] = useState(null);
    const [isShow, setIsShow] = useState(false);
    //https://picsum.photos/v2/list

    const GetImages = async () => {
        const strdata = await fetch("https://picsum.photos/v2/list");
        const json = await strdata.json();
        setImages(json);
    };

    return (
        <div>
            <button onClick={() => setIsShow(!isShow)}>
                {isShow ? "Hide" : "Show"}
            </button>
            {isShow && <Gallery />}
            <hr />
            <button onClick={GetImages}>Get Images</button>
            <hr />
            {images ? JSON.stringify(images) : "Loading..."}
        </div>
    );
};

export default index;
