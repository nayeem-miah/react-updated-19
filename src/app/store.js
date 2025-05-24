import { configureStore } from "@reduxjs/toolkit";
import  productsReducer  from "../features/productsSlice/productsSlice";
import singleProductReducer from "../features/productsSlice/SingleProductSlice";
import addProductReducer from "../features/addToCartSlice/addToCartSlice";

const store = configureStore({
    reducer: {
        productsReducer: productsReducer,
        singleProductReducer: singleProductReducer,
        addProductReducer : addProductReducer
    }
})
export default store;