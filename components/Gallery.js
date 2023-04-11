import React, { useEffect, useState } from "react";

const Gallery = () => {
    const [pagecount, setPagecount] = useState(1);
    const [images, setImages] = useState(null);

    const GetImages = async () => {
        const strdata = await fetch(
            `https://picsum.photos/v2/list?page=${pagecount}&limit=10`
        );
        const json = await strdata.json();
        setImages(json);
    };

    useEffect(() => {
        GetImages();
    }, [pagecount]);

    return (
        <div>
            <div className="d-flex flex-wrap">
                {images
                    ? images.map((image) => (
                          <div key={image.id}>
                              <img
                                  src={image.download_url}
                                  height="100"
                                  alt=""
                              />
                              <p>{image.author}</p>
                          </div>
                      ))
                    : "Loading..."}
            </div>
            <button onClick={() => setPagecount(pagecount - 1)}>Prev</button>
            <button onClick={() => setPagecount(pagecount + 1)}>Next</button>
        </div>
    );
};

export default Gallery;
