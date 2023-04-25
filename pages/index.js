import Head from "next/head";
import Link from "next/link";
const index = () => {
    return (
        <div className="container mt-5 p-5 bg-light">
            <Head>
                <title>Homepage</title>
            </Head>
            <h1>This is HomePage</h1>
            <p>index.js</p>
            <Link href="/show">Show</Link>
        </div>
    );
};

export default index;
