import { useEffect, useState } from "react";

const Gallery = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // Create Lifecycle -> first load view(HTML) then call useEffect
    useEffect(() => {
        // creation
        console.log("Gallery Component Created");

        // desctuction
        return () => {
            // alert("Do you want to leave this site?");
            console.log("Gallery Component Destroyed");
        };
    }, [password]);

    return (
        <div>
            <h1>Username : {username}</h1>
            <button onClick={() => setUsername("John")}>Get Username</button>
            <hr />
            <h1>Password : {password}</h1>
            <button onClick={() => setPassword("john@doe")}>
                Get Password
            </button>
        </div>
    );
};

export default Gallery;
