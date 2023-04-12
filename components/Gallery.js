import Link from "next/link";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

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

    const handlePageClick = (x) => {
        setPagecount(x.selected + 1);
    };

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
                              <Link href={`/card/${image.id}`}>
                                  {image.author}
                              </Link>
                          </div>
                      ))
                    : "Loading..."}
            </div>
            {/*  */}

            <ReactPaginate
                nextLabel=">>"
                onPageChange={handlePageClick}
                pageCount={10}
                previousLabel="<<"
                renderOnZeroPageCount={null}
            />
            {/*  */}
        </div>
    );
};

export default Gallery;
