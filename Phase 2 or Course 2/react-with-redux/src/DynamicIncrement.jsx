import { useState } from "react";
import { useDispatch } from "react-redux";

function DynamicIncrement() {
let [n,setN]=useState(0);
let dispatch = useDispatch();
let dynamicIncrementValue= ()=> {
    dispatch({type:"DYNAMIC_INCREMENT",payload:n})
    setN("");
}
    return(
        <div>
            <h2>Dynamic Increment</h2>
            <input type="text" name="n" onChange={(event)=>setN(event.target.value)} value={n}/><br/>
            <input type="button" value="Dynamic Increment" onClick={dynamicIncrementValue}/>
        </div>
    )
}

export default DynamicIncrement;