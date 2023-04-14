import "remixicon/fonts/remixicon.css";
import "@/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";

import Context from "@/Context/Context";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
    return (
        <Context>
            <Component {...pageProps} />
            <ToastContainer />
        </Context>
    );
}
