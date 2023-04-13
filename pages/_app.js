import "remixicon/fonts/remixicon.css";
import "@/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import Context from "@/context/Context";

export default function App({ Component, pageProps }) {
    return (
        <Context>
            <Component {...pageProps} />
        </Context>
    );
}
