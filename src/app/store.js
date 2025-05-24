import { configureStore } from "@reduxjs/toolkit";
import  productsReducer  from "../features/productsSlice/productsSlice";
import singleProductReducer from "../features/productsSlice/SingleProductSlice";

const store = configureStore({
    reducer: {
        productsReducer: productsReducer,
        singleProductReducer : singleProductReducer
    }
})
export default store;