import { useRouter } from "next/router";
import axios from "axios";

const ImageDetail = (props) => {
    console.log(props);
    return (
        <div className="container mt-5 p-5 bg-light">
            <img src={props.data.download_url} alt="" />
        </div>
    );
};

export async function getServerSideProps(context) {
    const { data } = await axios.get(
        `https://picsum.photos/id/${context.query.id}/200/300`
    );
    return {
        props: { data }, // will be passed to the page component as props
    };
}

export default ImageDetail;
