import { useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
let [products,setProducts]=useState([]);

let [product,setProduct]=useState({"pname":"",price:0.0});

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
  let result = await axios.get("http://localhost:3000/products");
  //console.log(result.data)
  setProducts(result.data)
  }catch(error){
    console.log(error)
  }
}

let storeProduct=async (event)=> {
  event.preventDefault(); 
      console.log(product)
  // 1st parameter is url and 2nd parameter json data or js object 
  try{
  let result = await axios.post("http://localhost:3000/products",product)
  console.log(result)
  }catch(error){
    console.log(error)
  }
  setProduct({pname:"",price:0.0})
}
loadProductData();
  return (
    <>
    <h2>Product CRUD Operation using axios with json-server</h2>
    <h2>Store Product</h2>
    <form onSubmit={storeProduct}>
      <label>PName</label>
      <input type='text' name='pname' value={product.pname}
      onChange={(event)=> setProduct({...product,"pname":event.target.value})} /> <br/>
      <label>Price</label>
      <input type='number' name='price' value={product.price}
      onChange={(event)=> setProduct({...product,"price":event.target.value})} /> <br/>
      <input type='submit' value="Store Product"/>
      <input type='reset' value="reset"/>
    </form>

    <h3>All Product Details</h3>
    <table border="1">
    <thead>
        <tr>
          <th>PId</th>
          <th>PName</th>
          <th>Price</th>  
        </tr>      
    </thead>
    <tbody>
      {
        products.map(p=>
          <tr key={p.id}>
            <td>{p.id}</td>
            <td>{p.pname}</td>
            <td>{p.price}</td>
          </tr>
        )
      }
    </tbody>
    </table>
    </>
  )
}

export default App
