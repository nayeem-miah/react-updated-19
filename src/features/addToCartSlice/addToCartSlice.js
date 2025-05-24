import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: []
};


const addProductSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload)
        },
        showProduct: (state, action) => {
            state.products = action.payload
        }
    }
});

export const {addProduct, showProduct } = addProductSlice.actions;
export default addProductSlice.reducer;