import { useState } from "react";
import { useSelector } from "react-redux";
import SecondComponent from "./SecondComponent";

function FirstComponent() {
let [num,setNum]=useState(100);     // local variable part FirstComponent 

let n = useSelector(gs=>gs.n)
let fname = useSelector(gs=>gs.fname)
let receiveEventFromChild= ()=>{
    setNum(200);
}
    return(
        <div>
            <h3>First Component</h3>
            <p>Local State variable Value of num variable part First Component is {num}</p>
            <p> Global variable part of store is {n} and name is {fname}</p>
            <SecondComponent changeValue={receiveEventFromChild}></SecondComponent>
        </div>
    )

}

export default FirstComponent;