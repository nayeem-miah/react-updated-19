import { configureStore } from "@reduxjs/toolkit";
import  productsReducer  from "../features/productsSlice/productsSlice";

const store = configureStore({
    reducer: {
        productsReducer : productsReducer
    }
})
export default store;