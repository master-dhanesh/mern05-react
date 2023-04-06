import { useState } from "react";

const index = () => {
    // javascript logic
    let [uname, setuname] = useState("John Doe");
    const [mydate, setMydate] = useState(new Date().toLocaleTimeString());

    setInterval(() => {
        setMydate(new Date().toLocaleTimeString());
    }, 1000);

    // let uname = "John Doe";

    const changehandler = () => {
        console.log("inside change handler");
        // uname = "Json Doe";
        setuname("JSON");
    };

    // console.log(uname);
    return (
        <div>
            <h1>{uname}</h1>
            <h2>{mydate}</h2>
            <p>Lorem</p>
            <button onClick={changehandler}>Change Name</button>
        </div>
    );
};

export default index;
