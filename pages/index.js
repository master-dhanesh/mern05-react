import React from "react";
import axios from "axios";
import Link from "next/link";

const index = (props) => {
    return (
        <div className="container mt-5 p-5 bg-light">
            <ul className="list-group">
                {props.data &&
                    props.data.map((i) => (
                        <li key={i.id} className="list-group-item">
                            <Link href={`/image-detail/${i.id}`}>
                                <img
                                    key={i.id}
                                    height={150}
                                    alt={i.author}
                                    src={i.download_url}
                                />
                            </Link>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export async function getServerSideProps(context) {
    const { data } = await axios.get(
        `https://picsum.photos/v2/list?page=2&limit=10`
    );
    return {
        props: { data }, // will be passed to the page component as props
    };
}

export default index;
