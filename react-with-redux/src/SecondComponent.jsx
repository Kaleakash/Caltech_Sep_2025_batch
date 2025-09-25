import { useDispatch } from "react-redux";

function SecondComponent(props) {
// dispatch is use to dispatch the action to reducer. 
    let dispatch = useDispatch();  // it will help to call reducer function 

return(
    <div>
        <h3>Second Component</h3>
    <input type="button" value="Increment" 
    onClick={()=>dispatch({type:"INCREMENT"})}/><br/>
    <input type="button" value="Change First Component Value"
    onClick={()=>props.changeValue()}/><br/>
    <input type="button" value="Decrement" 
    onClick={()=>dispatch({type:"DECREMENT"})}/><br/>
    </div>
)
}

export default SecondComponent;