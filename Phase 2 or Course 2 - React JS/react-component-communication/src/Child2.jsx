import { useState } from "react";

function Child2(props) {
let [user2,setUser2]=useState("john@gmail.com")

    return(
        <div style={{"backgroundColor":"red"}}>
            <h3>Child2 component</h3>
            <p>Parent name in child2 component {props.name}</p>
            <p>Child2 name in child2 component {user2}</p>
            <p>{props.passValueToChild2(user2)}</p>
            <p>Child1 name in child2 component {props.child1Value}</p>
        </div>
    )
}

export default Child2;