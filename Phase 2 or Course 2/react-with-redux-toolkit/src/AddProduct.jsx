import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "./ProductSlice";

function AddProduct() {
let [product,setProduct]=useState({pid:0,pname:"",price:0.0}); // property is object type 

let [pid,setPid]=useState(0)
let [pname,setPName]=useState("")
let [price,setPrice]=useState(0.0)


let dispatch  = useDispatch();
let products = useSelector(gs=>gs.product.products);

let storeProduct1= (event)=> {
    event.preventDefault();
    console.log(product);
    let result = products.find(p=>p.pid==product.pid);
    if(result==undefined){
        dispatch(addProduct(product))
    }else {
        alert("product id must be unique")
    }
    setProduct({pid:0,pname:"",price:0.0});
}
let storeProduct2= (event)=> {
    event.preventDefault();
    //console.log(pid+" "+pname+" "+price)
    let productData = {pid:pid,pname:pname,price:price} // convert to object 
    //console.log(productData);
    let result = products.find(p=>p.pid==productData.pid);
    if(result==undefined){
        dispatch(addProduct(productData))
    }else {
        alert("product id must be unique")
    }
    setPid(0);
    setPName("")
    setPrice(0.0)
}
    return(
        <div>
            <h3>Add Product with product object</h3>
            <form onSubmit={storeProduct1}>
                <label>Pid</label>
                <input type="number" name="pid" onChange=
                {(event)=>setProduct({...product,pid:event.target.value})} value={product.pid}/>   <br/>
                                <label>PName</label>
                <input type="text" name="pname" onChange=
                {(event)=>setProduct({...product,pname:event.target.value})} value={product.pname}/>   <br/>
                                <label>Price</label>
                <input type="number" name="price" onChange=
                {(event)=>setProduct({...product,price:event.target.value})} value={product.price}/>   <br/>
                <input type="submit" value="Add Product"/>
                <input type="reset" value="reset"/>
            </form>

            <h3>Add Product with Individual Property</h3>
            <form onSubmit={storeProduct2}>
                <label>Pid</label>
                <input type="number" name="pid" onChange=
                {(event)=>setPid(event.target.value)} value={pid}/>   <br/>
                                <label>PName</label>
                <input type="text" name="pname" onChange=
                {(event)=>setPName(event.target.value)} value={pname}/>   <br/>
                                <label>Price</label>
                <input type="number" name="price" onChange=
                {(event)=>setPrice(event.target.value)} value={price}/>   <br/>
                <input type="submit" value="Add Product"/>
                <input type="reset" value="reset"/>
            </form>
        </div>
    )
}

export default AddProduct;