import axios from "axios";

const ImageDetail = (props) => {
    console.log(props);
    return (
        <div className="container mt-5 p-5 bg-light">
            <h1 className="fs-1 fw-light">{props.data.username}</h1>
            <h3 className="fs-3 fw-light">{props.data.email}</h3>
        </div>
    );
};

export async function getStaticPaths() {
    const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/users/`
    );
    const params = data.map((user) => {
        return { params: { id: user.id.toString() } };
    });
    return {
        paths: params,
        fallback: false, // can also be true or 'blocking'
    };
}

export async function getStaticProps(context) {
    const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${context.params.id}`
    );
    return {
        props: { data }, // will be passed to the page component as props
    };
}

export default ImageDetail;
