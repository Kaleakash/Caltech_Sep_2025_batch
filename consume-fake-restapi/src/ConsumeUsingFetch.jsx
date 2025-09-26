import { useState } from "react";
function ConsumeUsingFetch(){
let [products,setProducts]=useState([]);
let loadFakeData = () =>{
    
   // fetch("https://dummyjson.com/products").then(result=>console.log(result)).catch(error=>console.log(error));

    fetch("https://dummyjson.com/products").then(response=>response.json()).
    then(result=>{
        console.log(result.products)
        setProducts(result.products);
        }
    ).catch(error=>console.log(error))
}    
    return(
        <div>
            <h2>Consume Product REST API using Fetch Function</h2>
            <input type="button" value="Load Product Fake Data" onClick={loadFakeData}/>
            <br/>
            <h2>Number of products are {products.length}</h2>
            <div>
                {products.map((p,index)=>
                <span key={index}>
                        <img src={p.thumbnail} width="200px" height="200px"/>
                        {p.title}
                </span>
                )}
            </div>
        </div>
    )
} 

export default ConsumeUsingFetch;