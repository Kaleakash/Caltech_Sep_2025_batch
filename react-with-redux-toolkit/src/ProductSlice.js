import { createSlice } from "@reduxjs/toolkit";

let initialStateData={
    products:[
        {pid:100,pname:"TV",price:56000},
        {pid:101,pname:"Computer",price:45000}
    ],
    name:"Akash"
}

let productSlice = createSlice({
    name:"product",
    initialState:initialStateData,
    reducers: {
        addProduct:(state,action)=> {
                //console.log("event fired")
                //console.log(state)
                //console.log(action)
                state.products.push(action.payload)
        },
        // we can write many action function which help to do the changes
    }
})

export const {addProduct}=productSlice.actions  // export function outside a file 
export default productSlice.reducer;    // we can link to store. 

