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
                                <h1>{i.name}</h1>
                            </Link>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export async function getStaticProps(context) {
    const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/users`
    );
    return {
        props: { data }, // will be passed to the page component as props
    };
}

export default index;
