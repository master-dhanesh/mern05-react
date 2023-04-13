import { createContext, useState } from "react";

export const DetsContext = createContext(null);

const Context = (props) => {
    const [dets, setDets] = useState({
        name: "John",
        email: "john@doe.com",
        contact: 1234567890,
    });

    return (
        <DetsContext.Provider value={[dets, setDets]}>
            {props.children}
        </DetsContext.Provider>
    );
};

export default Context;
