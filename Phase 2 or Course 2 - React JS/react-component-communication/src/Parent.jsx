import { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

function Parent() {
let [admin,setAdmin]=useState("admin@gmail.com");
let [user1Value,setUser1Value]=useState("");        // state variable ready to receive value from child1 
let [user2Value,setUser2Value]=useState("");        // state variable ready to receive value from child1 

let receiveValueFromChild1=(value)=>{
    console.log(value);
    setUser1Value(value);
}
let receiveValueFromChild2=(value)=>{
    console.log(value);
    setUser2Value(value);
}
    return(
        <div style={{"backgroundColor":"yellow"}}>
            
            <h3>Parent component</h3>
            <p>Parent name in parent component {admin}</p>
            <p>Child1 name in parent component is {user1Value}</p>
            <p>Child2 name in parent component is {user2Value}</p>
            <Child1 name={admin} passValueToChild1={receiveValueFromChild1} child2Value={user2Value}></Child1>
            <Child2 name={admin} passValueToChild2={receiveValueFromChild2} child1Value={user1Value}></Child2>
            <p>Parent name in parent component {admin}</p>
        </div>
    )
}

export default Parent;