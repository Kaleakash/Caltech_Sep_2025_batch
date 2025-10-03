import { useState } from "react";
import React from "react";

function ToggleComponent() {
let [message,setMessage]=useState(false);

    return(
        <div>
            <h2>Toggle Component</h2>
            <button onClick={()=>setMessage(true)}>Click Here</button>
            <p>{message && <span>Hello JEST</span>}</p>
        </div>
    )
}

export default ToggleComponent;