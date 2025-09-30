import { useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
let [products,setProducts]=useState([]);

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
loadProductData();

  return (
    <>
    <h2>Product CRUD Operation using axios with json-server</h2>

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
