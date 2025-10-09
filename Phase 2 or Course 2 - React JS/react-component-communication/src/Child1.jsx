import { useState } from "react";

function Child1(props) {
let [user1,setUser1]=useState("steven@gmail.com")

    return(
        <div style={{"backgroundColor":"gray"}}>
            <h3>Child1 component</h3>
            <p>Parent name in child1 component {props.name}</p>
            <p>Child1 name in child1 component {user1}</p>
            <p>{props.passValueToChild1(user1)}</p>
            <p>Child2 name in child1 component {props.child2Value}</p>
        </div>
    )
}

export default Child1;