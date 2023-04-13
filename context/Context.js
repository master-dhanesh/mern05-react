import { createContext, useState } from "react";

export const ImageContext = createContext(null);

const Context = (props) => {
    const [Images, setImages] = useState([]);
    return (
        <ImageContext.Provider value={[Images, setImages]}>
            {props.children}
        </ImageContext.Provider>
    );
};

export default Context;
