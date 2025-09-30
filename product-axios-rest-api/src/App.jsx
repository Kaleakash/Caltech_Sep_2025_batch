import { useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
let URL="http://localhost:3000/products";
let [products,setProducts]=useState([]);

let [product,setProduct]=useState({"pname":"",price:0.0});
let [submitButtonValue,setSubmitButtonValue]=useState("Add Product");

// load the data using ES5 style 
// let loadProductData=()=> {
//   axios.get("http://localhost:3000/products").then(result=> {
//       //console.log(result.data);
//       setProducts(result.data)
//   }).catch(error=> {
//     console.log(error)
//   })
// }
// loadProductData();

// ES6 style 
let loadProductData= async ()=> {
  try{
  let result = await axios.get(URL);
  //console.log(result.data)
  setProducts(result.data)
  }catch(error){
    console.log(error)
  }
}

let storeOrUpdateProduct=async (event)=> {
  event.preventDefault(); 
      console.log(product)
  // 1st parameter is url and 2nd parameter json data or js object 
  if(submitButtonValue=="Add Product"){

  
  try{
  let result = await axios.post(URL,product)
  console.log(result)
  }catch(error){
    console.log(error)
  }
}else {
    //alert("ready to update")
    try{
      // put method 1st parameter url with id must be appended and 2nd parameter json data. 
      let result = await axios.put(URL+"/"+product.id,product);
      console.log(result)
      setSubmitButtonValue("Add Product")
    }catch(error){
      console.log(error)
    }
}

  setProduct({pname:"",price:0.0})
}
loadProductData();


let deleteProduct=async (id)=> {
  //alert("delete fun called.."+id)
  try{
  let result = await axios.delete(URL+"/"+id);
  console.log(result)
  }catch(error){
    console.log(error)
  }
}
let readyToUpdateProduct=(product)=> {
  //alert(product)
  setProduct({"id":product.id,"pname":product.pname,"price":product.price})
  setSubmitButtonValue("Update Product");
}
  return (
    <>
    <h2>Product CRUD Operation using axios with json-server</h2>
    <h2>Store Product</h2>
    <form onSubmit={storeOrUpdateProduct}>
      <label>PName</label>
      <input type='text' name='pname' value={product.pname}
      onChange={(event)=> setProduct({...product,"pname":event.target.value})} /> <br/>
      <label>Price</label>
      <input type='number' name='price' value={product.price}
      onChange={(event)=> setProduct({...product,"price":event.target.value})} /> <br/>
      <input type='submit' value={submitButtonValue}/>
      <input type='reset' value="reset"/>
    </form>

    <h3>All Product Details</h3>
    <table border="1">
    <thead>
        <tr>
          <th>PId</th>
          <th>PName</th>
          <th>Price</th> 
          <th>Delete</th>
          <th>Update</th> 
        </tr>      
    </thead>
    <tbody>
      {
        products.map(p=>
          <tr key={p.id}>
            <td>{p.id}</td>
            <td>{p.pname}</td>
            <td>{p.price}</td>
            <td>
              <input type='button' value="delete" onClick={()=>deleteProduct(p.id)}/>
            </td>
            <td>
              <input type='button' value="update" onClick={()=>readyToUpdateProduct(p)}/>
            </td>
          </tr>
        )
      }
    </tbody>
    </table>
    </>
  )
}

export default App
