import ComponentD from "./ComponentD.jsx";

import React, {useState, createContext, useContext} from "react";
import { UserContext } from "./ComponentA";

function ComponentC(){
    
    const user = useContext(UserContext);


    return(
        <div className="box">
            <h1>ComponentC</h1>
            <h2>{`Again ${user}`}</h2>
            <ComponentD/>
        </div>
    );
}

export default ComponentC