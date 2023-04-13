import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { ImageContext } from "../context/Context";

const Gallery = () => {
    const [pagecount, setPagecount] = useState(1);
    const [images, setImages] = useContext(ImageContext);

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
            <ul className="list-group">
                {images
                    ? images.map((image) => (
                          <li className="list-group-item" key={image.id}>
                              <img
                                  src={image.download_url}
                                  height="100"
                                  alt=""
                              />
                              <Link
                                  className="text-decoration-none ms-3"
                                  href={`/card/${image.id}`}
                              >
                                  {image.author}
                              </Link>
                          </li>
                      ))
                    : "Loading..."}
            </ul>
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
