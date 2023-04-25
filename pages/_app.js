import "remixicon/fonts/remixicon.css";
import "@/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Next App</title>
            </Head>
            <Component {...pageProps} />
            <ToastContainer />
        </>
    );
}
