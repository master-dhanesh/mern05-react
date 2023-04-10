import React, { useEffect, useState } from "react";

const index = () => {
    const [images, setImages] = useState(null);
    //https://picsum.photos/v2/list

    const GetImages = async () => {
        const strdata = await fetch("https://picsum.photos/v2/list");
        const json = await strdata.json();
        setImages(json);
    };

    // Lifecycle of component
    useEffect(() => {
        GetImages();
    }, []);

    return (
        <div>
            <button onClick={GetImages}>Get Images</button>
            <hr />
            {images ? JSON.stringify(images) : "Loading..."}
        </div>
    );
};

export default index;
