import { useDispatch, useSelector } from "react-redux";

function Product() {
let dispatch = useDispatch();
let product = useSelector(gs=>gs.product)
    return(
        <div>
            <h2>Product Component</h2>
            <p>Pid is {product.pid} Name is {product.pname} and Price is {product.price}</p>
            <hr/>
        <input type="button" value="Change Product Details"
        onClick={()=>dispatch({type:"CHANGE_PRODUCT_DETAILS"})}/>
        </div>
    )
}

export default Product;