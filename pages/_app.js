import "remixicon/fonts/remixicon.css";
import "@/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { store } from "../store/store";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
            <ToastContainer />
        </Provider>
    );
}

// BME - Block_Element-Modifier
{
    /* <div className="parent">
    <p className="gallery-parent-title g_p-title-size "></p>
</div>; */
}
