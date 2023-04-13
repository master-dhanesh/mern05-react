import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { ImageContext } from "../../context/Context";

const CardId = () => {
    const [Images, setImages] = useContext(ImageContext);
    // console.log(images);
    const [image, setImage] = useState(null);
    const router = useRouter();
    const { id } = router.query;

    const GetSingleImage = async () => {
        // const strimage = await fetch(`https://picsum.photos/id/${id}/info`);
        // const json = await strimage.json();.
        const json = Images.filter((i) => i.id === id)[0];
        console.log(json);
        setImage(json);
    };
    useEffect(() => {
        GetSingleImage();
    }, []);

    console.log(image);

    return image ? (
        <div className="card" style={{ width: "18rem" }}>
            <img src={image.download_url} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{image.author}</h5>
                <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                </p>
                <button
                    onClick={() => router.push("/")}
                    className="btn btn-primary"
                >
                    Go Home
                </button>
            </div>
        </div>
    ) : (
        "Loading..."
    );
};

export default CardId;
