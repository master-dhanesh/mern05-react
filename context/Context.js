import React, { createContext, useState } from "react";

export const UserContext = createContext(null);

const Context = (props) => {
    const [users, setUsers] = useState([]);
    return (
        <UserContext.Provider value={[users, setUsers]}>
            {props.children}
        </UserContext.Provider>
    );
};

export default Context;
