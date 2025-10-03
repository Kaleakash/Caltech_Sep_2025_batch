import { configureStore } from "@reduxjs/toolkit";
import productReducer from './ProductSlice';

const storeRef = configureStore({
    reducer: {
        product:productReducer  ,
        //order:orderReducer
    }
})

export default storeRef;